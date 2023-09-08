import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from "@nestjs/websockets";
import { Server } from "socket.io";
import { ChatService } from "./chat.service";
import { CustomSocket } from "src/adapters/redis.io.adapter";
import { RmqService } from "src/rmq/rmq.service";
import { ChatEventDto } from "./dto/chat.dto";
import * as crypto from "crypto";
import { ID } from "src/types";
import { ChatDocumnet } from "src/entities/prompt.entity";

@WebSocketGateway(3001, { cors: "*" })
export class ChatGateway {
  private chats: Record<string, { isConnected: boolean; doc: ChatDocumnet }> =
    {};
  @WebSocketServer()
  server: Server;

  constructor(
    private readonly service: ChatService,
    private readonly rmq: RmqService,
  ) {
    this.rmq.subscribe(async (rawData) => {
      try {
        const socketId = rawData.properties.correlationId;
        const socket = this.server.to(socketId);
        const data = JSON.parse(Buffer.from(rawData.content).toString());
        let isSocketConnected = true;
        if (!this.server.sockets.sockets.get(socketId))
          isSocketConnected = false;

        const [_, chatId] = data.sid.split(".");
        const chat = this.chats[socketId]
          ? this.chats[socketId].doc
          : await this.service.findById(chatId);

        if (!this.chats[socketId])
          this.chats[socketId] = { doc: chat, isConnected: isSocketConnected };

        if (data.end) {
          console.log("saving", this.chats[socketId]);
          if (this.chats[socketId].isConnected) socket.emit("prompt_reply_end");
          this.chats[socketId].doc.history = (data as any).history;
          await this.chats[socketId].doc.save();
          await this.service.handlePrompt(chat.creator as unknown as ID);
          delete this.chats[socketId];
          await new Promise((r) => setTimeout(r, 300));
        } else {
          if (this.chats[socketId].isConnected)
            socket.emit("prompt_reply", data);
          this.chats[socketId].doc.history = (data as any).history;
        }
      } catch (error) {
        console.error(error);
      } finally {
        this.rmq.ack(rawData);
      }
    });
  }

  @SubscribeMessage("prompt")
  async handlePrompt(client: CustomSocket, data: ChatEventDto) {
    if (!data.message || !data.message.trim()) return;
    const chat = await this.service.findByIdOrCreate(
      data.chatId,
      client.user._id,
    );

    const messageDateCreation = new Date();
    const messageHash = crypto
      .createHash("md5")
      .update(data.message + messageDateCreation.toISOString())
      .digest("hex");

    client.emit("prompt_added", {
      _id: `${messageHash}.${chat._id.toString()}`,
      input: data.message, // user input
      createdAt: messageDateCreation,
    });
    this.rmq.send(client.id, {
      sid: `${messageHash}.${chat._id.toString()}`,
      prompt: data.message,
      history: chat.history,
    });
    // console.log(data);
  }
}

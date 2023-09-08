import { Inject, Injectable } from "@nestjs/common";
import { IRmqOptions, ISendData, ReceiveData } from "./rmq.interfaces";
import { connect, Connection, Channel, Replies, ConsumeMessage } from "amqplib";
import { RMQ_OPTIONS } from "./rmq.constants";

@Injectable()
export class RmqService {
  private connection: Connection;
  private channel: Channel;
  private options: IRmqOptions;
  private result: Replies.AssertQueue;

  constructor(@Inject(RMQ_OPTIONS) options: IRmqOptions) {
    this.options = options;
    this.connect().then(() => console.log("RabbitMQ Service: Connected"));
  }

  private async connect() {
    this.connection = await connect(this.options.url);
    this.channel = await this.connection.createChannel();
    this.result = await this.channel.assertQueue("reply_prompt");
  }

  public close(tag: Replies.Consume["consumerTag"]) {
    this.channel.cancel(tag);
  }

  public ack(data: ConsumeMessage) {
    return this.channel.ack(data);
  }

  public async send(corrId: string, data: ISendData) {
    const sendData = Buffer.from(JSON.stringify(data));

    this.channel.sendToQueue("prompt", sendData, {
      replyTo: this.result.queue,
      correlationId: corrId,
    });
  }
  public subscribe(callback: (data: ConsumeMessage) => void) {
    try {
      return this.channel.consume(this.result.queue, callback);
    } catch (e) {
      console.warn(e);
    }
  }
}

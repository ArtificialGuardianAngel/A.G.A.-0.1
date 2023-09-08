import {
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  BadRequestException,
} from "@nestjs/common";
import { ChatService } from "./chat.service";
import { User } from "../auth/guards/auth.decorator";
import { AuthGuard } from "../auth/guards/auth.guard";

@UseGuards(AuthGuard)
@Controller()
export class ChatController {
  constructor(private readonly service: ChatService) {}

  @Post("create")
  handleCreate(@User("_id") id: string) {
    try {
      return this.service.create(id);
    } catch (error) {
      console.log(error);
      throw new BadRequestException();
    }
  }

  @Get("last")
  handleLast(@User("_id") id: string) {
    return this.service.findLastChat(id);
  }

  @Get("previous")
  handlePrevious(@User("_id") id: string) {
    return this.service.findLastChats(id);
  }

  @Get(":id")
  handleGetOne(@User("_id") userId: string, @Param("id") id: string) {
    return this.service.findByIdAndCreator(id, userId);
  }
}

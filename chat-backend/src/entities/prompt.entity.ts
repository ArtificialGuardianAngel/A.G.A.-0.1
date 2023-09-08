import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { User } from "./user.entity";

@Schema({ _id: false })
class History {
  @Prop({ default: [] })
  internal: Array<string>[];
  @Prop({ default: [] })
  visible: Array<string>[];
}
@Schema()
export class Chat {
  @Prop({ type: History, default: { internal: [], visible: [] } })
  history: History;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  creator: User;
}

export type ChatDocumnet = HydratedDocument<Chat>;
export const ChatSchema = SchemaFactory.createForClass(Chat);

ChatSchema.post<ChatDocumnet>("save", function (_, next) {
  // if (doc.password) ;
  this.updatedAt = new Date();
  next();
});

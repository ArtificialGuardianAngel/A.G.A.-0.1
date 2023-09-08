import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as crypto from "crypto";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";

export enum UserTypeEnum {
  anonymous = "anonymous",
  authed = "authed",
}

@Schema()
export class User {
  @Prop({ default: crypto.randomUUID, unique: true })
  deviceId: string;

  @Prop({ enum: UserTypeEnum, default: UserTypeEnum.anonymous })
  type: UserTypeEnum;

  @Prop({ required: false })
  email?: string;

  @Prop({ required: false })
  emailForVerify?: string;

  @Prop({ default: crypto.randomUUID, required: false })
  code?: string;

  @Prop({ type: MongooseSchema.Types.Mixed })
  metadata: any;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;
}

export type UserDocumnet = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);

UserSchema.post("save", (doc, next) => {
  // if (doc.password) ;
  if (!doc.createdAt) doc.createdAt = new Date();
  doc.updatedAt = new Date();
  doc.code = crypto.randomUUID();

  next();
});

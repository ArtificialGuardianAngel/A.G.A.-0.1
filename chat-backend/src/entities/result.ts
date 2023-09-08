import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Schema as MongooseSchema } from "mongoose";
import { User } from "./user.entity";

@Schema()
export class HappinessResult {
  @Prop({ type: MongooseSchema.Types.ObjectId, ref: User.name })
  researched: User;

  @Prop({ type: MongooseSchema.Types.Mixed })
  question_answers: Record<string, Record<string, string>>;

  @Prop({ type: MongooseSchema.Types.Mixed })
  demographic_answers: Record<string, string>;
}

export type HappinessResultDocument = HydratedDocument<HappinessResult>;
export const HappinessResultSchema =
  SchemaFactory.createForClass(HappinessResult);

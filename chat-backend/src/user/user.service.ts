import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ClientSession, Model } from "mongoose";
import { User } from "src/entities/user.entity";
import { ID } from "src/types";

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private readonly model: Model<User>) {}

  async create(metadata?: any) {
    const instance = new this.model({ metadata });
    return instance.save();
  }

  async findOne(id: ID, session?: ClientSession) {
    const instance = await this.model.findOne(
      {
        $or: [{ _id: id }, { deviceId: id }],
      },
      null,
      { session },
    );

    return instance;
  }

  async findOneByEmail(email: string, session?: ClientSession) {
    const instance = await this.model.findOne(
      {
        email,
      },
      null,
      { session },
    );

    return instance;
  }
}

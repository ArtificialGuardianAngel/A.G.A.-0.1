import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
  InternalServerErrorException,
} from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { AuthorisationDto } from "./dto/auth.dto";
import { Connection } from "mongoose";
import { InjectConnection } from "@nestjs/mongoose";
import { UserTypeEnum } from "src/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    @InjectConnection() private readonly connection: Connection,
  ) {}

  async connect(id: string, metadata?: any) {
    const instance = await this.userService.findOne(id);
    if (!instance) return this.userService.create(metadata);
    if (instance.metadata)
      instance.metadata = { ...instance.metadata, ...metadata };

    return instance.save();
  }
}

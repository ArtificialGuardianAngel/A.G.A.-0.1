import { Controller, Post, Get, Body, UseGuards } from "@nestjs/common";
import { AllowAny, User } from "./guards/auth.decorator";
import { AuthService } from "./auth.service";
import { sign } from "jsonwebtoken";
import { environment } from "src/enviroment";
import { AuthGuard } from "./guards/auth.guard";
import { UserTypeEnum } from "src/entities/user.entity";
import { UserService } from "src/user/user.service";

@UseGuards(AuthGuard)
@Controller()
export class AuthController {
  constructor(
    private readonly service: AuthService,
    private readonly userService: UserService,
  ) {}
  @AllowAny()
  @Post("connect")
  async handleConnect(
    @Body("metadata") metadata: any,
    @User("_id") id?: string,
  ) {
    console.log("connected user", id);
    const user = await this.service.connect(id, metadata);
    return {
      token: sign(user.toObject(), environment.JWT_SECRET_PASSWORD, {
        expiresIn: "30d",
        algorithm: "HS256",
      }),
    };
  }

  @Get("me")
  async handleMe(@User("_id") id?: string) {
    console.log({ id });
    if (!id) return null;
    const instance = await this.userService.findOne(id);
    if (instance.type === UserTypeEnum.anonymous || instance.emailForVerify)
      return null;
    return instance;
  }
}

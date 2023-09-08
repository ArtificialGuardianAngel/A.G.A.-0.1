import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from "@nestjs/common";
import { User as UserModel } from "src/entities/user.entity";

export const User = createParamDecorator(
  (data: string, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    return data
      ? (req.user?.[data] as keyof UserModel | undefined)
      : (req.user as UserModel);
  },
);

export const AllowAny = () => SetMetadata("allow-any", true);

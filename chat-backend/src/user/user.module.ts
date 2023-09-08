import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/entities/user.entity";
import { UserService } from "./user.service";

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: User.name,
        useFactory: () => {
          const mySchema = UserSchema;
          mySchema.pre("save", function (next) {
            // if (doc.password) ;
            this.updatedAt = new Date();
            next();
          });
          return mySchema;
        },
      },
    ]),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}

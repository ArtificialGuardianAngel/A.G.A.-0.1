import { Module } from "@nestjs/common";
import { RouterModule } from "@nestjs/core";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ScheduleModule } from "@nestjs/schedule";
import { AppController } from "./app.controller";
import { UserModule } from "./user/user.module";
import { RmqModule } from "./rmq/rmq.module";
import { extractConfigurationFromConfigService } from "./config/common";
import { ChatModule } from "./chat/chat.module";
import { AuthModule } from "./auth/auth.module";
import { FilesModule } from "./files/files.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>("MONGODB_URI"),
      }),
      inject: [ConfigService],
    }),
    RmqModule.forAsyncRoot({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: extractConfigurationFromConfigService({
        template: {
          url: "RMQ_HOST",
        },
        validate: ["url"],
      }),
    }),
    ScheduleModule.forRoot(),
    FilesModule,
    UserModule,
    ChatModule,
    AuthModule,
    RouterModule.register([
      {
        path: "files",
        module: FilesModule,
      },
      {
        path: "user",
        module: AuthModule,
      },
      {
        path: "chat",
        module: ChatModule,
      },
    ]),
  ],
  controllers: [AppController],
})
export class AppModule {}

import { DynamicModule, Global, Module, Provider } from "@nestjs/common";
import { IRmqModuleOptions } from "./rmq.interfaces";
import { RMQ_OPTIONS } from "./rmq.constants";
import { RmqService } from "./rmq.service";

@Global()
@Module({})
export class RmqModule {
  static forAsyncRoot(options: IRmqModuleOptions): DynamicModule {
    const asyncOptions = this.createAsyncOptionsProvider(options);
    return {
      module: RmqModule,
      imports: options.imports,
      providers: [RmqService, asyncOptions],
      exports: [RmqService],
    };
  }

  private static createAsyncOptionsProvider(
    options: IRmqModuleOptions,
  ): Provider {
    return {
      provide: RMQ_OPTIONS,
      useFactory: async (...args: any[]) => {
        const config = await options.useFactory(...args);
        return config;
      },
      inject: options.inject || [],
    };
  }
}

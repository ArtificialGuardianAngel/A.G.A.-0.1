import { ModuleMetadata } from "@nestjs/common";

export interface IRmqOptions {
  url: string;
}

export interface IRmqModuleOptions extends Pick<ModuleMetadata, "imports"> {
  useFactory: (...args: any[]) => Promise<IRmqOptions> | IRmqOptions;
  inject?: any[];
}

interface IReceivePollingData {
  sid: string; // message hash now
  message: string;
  history: {
    internal: Array<string>;
    visible: Array<string>;
  };
  end: undefined;
}

interface IReceiveEndData {
  sid: string;
  end: true;
}

export type ReceiveData = IReceivePollingData | IReceiveEndData;

export interface ISendData {
  prompt: string;
  sid: string;
  history?: {
    internal: Array<string>[];
    visible: Array<string>[];
  };
}

import { History } from './chat';

export interface IMessage {
  from: 'aga' | string;
  prompt_id: string;
  content: string;
}

export interface IPromptAddedDto {
  _id: string;
  input: string; // user input
  createdAt: string;
}
export interface IPromptReplyDto {
  sid: string; // prompt: IPromptAddedDto & { output: string }
  message: string;
  history: History;
}

export class PromptDto {
  prompt: string;
  model_type: "falcon" | "llama";
}

export class ChatEventDto {
  message: string;
  chatId: string;
}

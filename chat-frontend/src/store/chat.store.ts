import { IChatDocument } from "@/types/chat";
import io from "socket.io-client";
import { create } from "zustand";
import { useAppStore } from "./app.store";

type Message = { content: string; isMe: boolean };

type ChatStore = {
  messages: Array<Message>;
  chats: Array<IChatDocument>;
  chat: IChatDocument | undefined;
  chatId: string | null;
  isGenerating: boolean;
  prompt: (data: string) => void;
};

export const useChatStore = create<ChatStore>((set) => {
  const token = useAppStore.getState()?.token;
  const socket = io(`${process.env.NEXT_PUBLIC_API_URL}/?token=${token}`, {
    autoConnect: false,
  });
  return {
    messages: [],
    chats: [],
    chat: undefined,
    chatId: null,
    isGenerating: false,
    prompt: () => {},
  };
});

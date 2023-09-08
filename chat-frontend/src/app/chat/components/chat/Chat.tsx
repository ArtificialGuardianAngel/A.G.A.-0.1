"use client";
import AgaFace from "./AgaFace";
import ChatInput from "./ChatInput";
import Message from "./Message";
import { useApp } from "@/hooks/use-app";

const Chat = () => {
    const { messages, chat, isGenerating, prompt } = useApp();

    return (
        <div className="grid max-h-[96vh] grid-rows-[auto_1fr_auto] wishes-sm:grid-rows-[auto_auto_1fr_auto]">
            <div className="mb-[20px] aspect-video sm:hidden">
                <AgaFace className="object-cover" />
            </div>

            <div className="p-[10px_0] text-center text-sm text-blue-4 wishes-md:p-0 wishes-md:text-[13px]">
                Conversation,{" "}
                {chat?.createdAt &&
                    new Date(chat.createdAt).toLocaleString().replace(",", "")}
            </div>
            <div className="overflow-y-auto p-[20px_10px] scrollbar">
                {messages.map(({ content, isMe }, index) => (
                    <Message
                        key={index}
                        message={content}
                        isMe={isMe}
                        isGenerating={
                            index === messages.length - 1 && isGenerating
                        }
                        isLast={index === messages.length - 1}
                        prompt={prompt}
                    />
                ))}
            </div>
            <ChatInput />
        </div>
    );
};

export default Chat;

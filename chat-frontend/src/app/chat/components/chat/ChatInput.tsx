"use client";
import React, { useState } from "react";
import { Input } from "@/components";
import { useApp } from "@/hooks/use-app";
import { SendIcon } from "@/components/Icons";

interface Props {
    onChatInput?: () => void;
}

const ChatInput: React.FC<Props> = ({ onChatInput }) => {
    const { prompt } = useApp();
    const [input, setInput] = useState("");

    const onSubmit = () => {
        prompt(input);
        setInput("");
        onChatInput && onChatInput();
    };

    return (
        <div className="relative pb-[20px]">
            <Input
                placeholder="Ask your question here..."
                size="lg"
                buttonContent={<SendIcon color="#FFFFFF" />}
                buttonProps={{
                    onClick: () => {
                        onChatInput && onChatInput();
                        prompt(input);
                    },
                }}
                // className="mb-6"
                value={input}
                onChange={setInput}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        onSubmit();
                    }
                }}
            />
            {/* <div className="flex gap-[30px] items-center justify-center max-[767px]:hidden">
        <Switch label="Assistant mode" />
        <Switch label="Knowledge mode" />
        <Switch label="Internet search" />
      </div> */}
        </div>
    );
};

export default ChatInput;

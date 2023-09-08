"use client";
import { Button } from "../components";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import cookie from "cookie-cutter";
import { ChatInput } from "@/app/chat/components/chat";

interface Props {
  isActivated: boolean;
}

const SearchPage = ({ isActivated: _isAcrivated }: Props) => {
  const [isActivated, setIsActivated] = useState(_isAcrivated);
  const router = useRouter();
  const activate = () => {
    cookie.set("is_activated", "true");
    setIsActivated(true)
    // router.push("/chat");
  };
  return (
    <div className="flex flex-col w-screen h-[100dvh] items-center p-[30px_30px_40px]">
      {!isActivated && (
        <div className="text-blue-4 text-sm">NUAH A.G.A. (version 0.1)</div>
      )}
      <div className="flex-1 flex items-center justify-center w-full">
        {!isActivated && (
          <img
            className="max-h-[65vh] mix-blend-lighten"
            src="/images/aga-face-new.png"
            alt=""
          />
        )}
        {isActivated && (
          // <video className="max-h-[70vh] rounded-[30px]" autoPlay>
          //   <source src={video} type="video/mp4" />
          // </video>
          <iframe
            className="max-h-[70vh] max-w-[740px] rounded-[30px] w-full h-full"
            src="https://www.youtube.com/embed/qnv_tOxIsMM?autoplay=1&controls=0&rel=0&showinfo=0"
          ></iframe>
        )}
      </div>
      <div className="text-center mb-3">
        <span
          className="text-white text-sm underline cursor-pointer"
          onClick={() => router.push("/chat")}
        >
          Skip video
        </span>
      </div>
      {!isActivated && (
        <Button size="lg" className="mb-[30px]" onClick={() => activate()}>
          Watch A.G.A.
        </Button>
      )}
      <div className="max-w-[840px] w-full">
        <ChatInput
          onChatInput={() => {
            router.push("/chat");
          }}
        />
      </div>
    </div>
  );
};

export default SearchPage;

'use client'
import { useContext } from "react";
import { Button } from "@/components";
import { useApp } from "@/hooks/use-app";
import OverlayPageContext from "@/context/OverlayPageContext";
import { PreviousChatsTemplate } from "@/templates";

const MobileHeader = () => {
  const { startNewChat, user } = useApp();
  const { open, setContent } = useContext(OverlayPageContext);

  return (
    <>
      <div className="mb-[20px] flex lg:hidden">
        <div className="ml-auto flex gap-[5px]">
          <Button
            className="flex-1"
            type="secondary"
            size="sm"
            onClick={startNewChat}
          >
            New chat
          </Button>
          {user && (
            <Button
              className="flex-1 whitespace-nowrap"
              type="secondary"
              size="sm"
              onClick={() => {
                setContent(<PreviousChatsTemplate />);
                open();
              }}
            >
              Previous chats
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

export default MobileHeader;

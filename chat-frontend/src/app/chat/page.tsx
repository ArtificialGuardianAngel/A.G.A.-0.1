import { AppProvider } from "@/context/AppContext";
import { Chat } from "./components/chat";
import LeftBar from "./components/LeftBar";
import RightBar from "./components/RightBar";
import MobileHeader from "./components/MobileHeader";
import { OverlayPageContextProvider } from "@/context/OverlayPageContext";
import { ModalProvider } from "@/context/ModalContext";
import { CSSTransition } from "react-transition-group";
import { OverlayTemplate } from "@/templates";

const ChatPage = () => {
    return (
        <OverlayPageContextProvider>
            <ModalProvider>
                <div className="flex h-[100dvh] w-screen flex-col p-[20px]">
                    <MobileHeader />
                    <AppProvider>
                        <div className="grid flex-1 grid-cols-[300px_1fr_300px] gap-[4px] wishes-xl:grid-cols-[216px_1fr_216px] wishes-lg:grid-cols-[256px_1fr] wishes-md:gap-[20px] wishes-md:grid-cols-[1fr]">
                            <LeftBar />
                            <Chat />
                            <RightBar />
                        </div>
                    </AppProvider>
                    <OverlayTemplate />
                </div>
            </ModalProvider>
        </OverlayPageContextProvider>
    );
};

export default ChatPage;

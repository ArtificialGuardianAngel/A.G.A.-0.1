"use client";
import { useContext } from "react";
import OverlayPageContext from "../context/OverlayPageContext";
import { CSSTransition } from "react-transition-group";

const OverlayPage = () => {
    const { opened, content, close } = useContext(OverlayPageContext);

    return (
        <CSSTransition
            in={opened}
            timeout={300}
            unmountOnExit
            classNames={"overlay-page"}
        >
            <div className="overlay-page-background fixed left-0 top-0 z-50 h-[100dvh] w-screen overflow-y-auto p-[20px] text-accent-green min-[1024px]:scrollbar">
                <button
                    onClick={() => close()}
                    className="absolute right-[20px] top-[20px] h-[40px] w-[40px] rounded-full border-2 border-accent-green"
                >
                    <div className="absolute left-[50%] top-[50%] h-[2px] w-[16px] translate-x-[-50%] rotate-45 rounded-[2px] bg-accent-green"></div>
                    <div className="absolute left-[50%] top-[50%] h-[2px] w-[16px] translate-x-[-50%] rotate-[-45deg] rounded-[2px] bg-accent-green"></div>
                </button>

                <div className="m-auto max-w-[820px] p-[0_20px] max-[1024px]:p-[0_10px]">
                    {content}
                </div>
            </div>
        </CSSTransition>
    );
};

export default OverlayPage;

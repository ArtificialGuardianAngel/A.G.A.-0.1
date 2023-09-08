import React, { useContext, useEffect, useRef, useState } from "react";
import cn from "classnames";
import { CSSTransition } from "react-transition-group";
import { ProgressLine, SideNav, VerticalNav } from "..";
import { FaqBlock } from "../../blocks";

import styles from "./Layout.module.scss";
import StageContext from "../../context/StageContext";
import { ArrowUpIcon } from "../Icons/ArrowUpIcon";

type Props = React.PropsWithChildren;

const Layout: React.FC<Props> = ({ children }) => {
    const [faqOpened, setFaqOpened] = useState(false);
    const { nextStage, prevStage } = useContext(StageContext);
    const moving = useRef(false);
    const touchStart = useRef(0);

    useEffect(() => {
        const handleTouchStart = (e: TouchEvent) => {
            if (moving.current) {
                return;
            }

            touchStart.current = e.touches[0].clientY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            const position = e.changedTouches[0].clientY;

            if (
                moving.current ||
                Math.abs(touchStart.current - position) < 15
            ) {
                return;
            }

            moving.current = true;
            setTimeout(() => (moving.current = false), 1000);
            if (touchStart.current > position - 5) {
                nextStage();
            } else {
                prevStage();
            }
        };

        const handleTouchMove = (e: TouchEvent) => e.preventDefault();

        const handleScroll = (e: WheelEvent) => {
            if (e.deltaY === 0 || moving.current) {
                return;
            }

            moving.current = true;
            setTimeout(() => (moving.current = false), 1000);

            const scrollDown = e.deltaY > 0;
            if (scrollDown) {
                nextStage();
            } else {
                prevStage();
            }
        };

        document.addEventListener("wheel", handleScroll);
        document.addEventListener("touchstart", handleTouchStart);
        document.addEventListener("touchend", handleTouchEnd);
        document.addEventListener("touchmove", handleTouchMove);

        return () => {
            document.removeEventListener("wheel", handleScroll);
            document.removeEventListener("touchstart", handleTouchStart);
            document.removeEventListener("touchend", handleTouchEnd);
            document.removeEventListener("touchmove", handleTouchMove);
        };
    }, [nextStage, prevStage]);

    return (
        <div className={styles.layout}>
            <ProgressLine className={styles.progress} />
            <SideNav className={styles.sideNav} />
            <VerticalNav
                className={styles.verticalNav}
                topButtonClass={styles.topNavButton}
                bottomButtonClass={styles.bottomNavButton}
            />
            <CSSTransition
                in={faqOpened}
                timeout={300}
                unmountOnExit
                classNames="faq-page"
            >
                <FaqBlock />
            </CSSTransition>
            <main className={styles.content}>{children}</main>
            <button
                className={cn(styles.faq, { [styles.faqOpened]: faqOpened })}
                onClick={() => setFaqOpened((prev) => !prev)}
            >
                <ArrowUpIcon className="rotate-[-90deg]" />
                FAQ
            </button>
        </div>
    );
};

export default Layout;

import React, { useContext } from "react";
import cn from "classnames";
import { BaseProps } from "../../util/types";
import checkArrow from "../../assets/images/check-arrow.svg";

import styles from "./VerticalNav.module.scss";
import StageContext from "../../context/StageContext";
import { ArrowUpIcon } from "../Icons/ArrowUpIcon";

interface VerticalNavProps {
    topButtonClass?: string;
    bottomButtonClass?: string;
}

type Props = VerticalNavProps & BaseProps;

const VerticalNav: React.FC<Props> = ({
    topButtonClass,
    bottomButtonClass,
}) => {
    const { stage, stagesCount, nextStage, prevStage } =
        useContext(StageContext);

    return (
        <>
            {stage > 0 && (
                <button
                    className={cn(styles.button, styles.top, topButtonClass)}
                    onClick={() => prevStage()}
                >
                    <ArrowUpIcon className={cn(styles.icon, styles.top)} />
                </button>
            )}

            {stage < stagesCount - 1 && (
                <button
                    className={cn(
                        styles.button,
                        styles.bottom,
                        bottomButtonClass,
                    )}
                    onClick={() => nextStage()}
                >
                    <ArrowUpIcon className={cn(styles.icon, styles.bottom)} />
                </button>
            )}
        </>
    );
};

export default VerticalNav;

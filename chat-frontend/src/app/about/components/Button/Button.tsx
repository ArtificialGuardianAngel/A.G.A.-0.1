import React from "react";
import cn from "classnames";
import { BaseProps } from "../../util/types";

import styles from "./Button.module.scss";
import { LinkIcon } from "../Icons/LinkIcon";

interface ButtonProps {
    type?: "button" | "link";
    href?: string;
}

type Props = ButtonProps & BaseProps & React.HTMLProps<HTMLButtonElement>;

const Button: React.FC<Props> = ({
    children,
    className,
    href,
    type = "button",
    ...props
}) => {
    if (type === "link") {
        return (
            <a className={cn(className, styles.button)} href={href}>
                <span>{children}</span>
                <LinkIcon />
            </a>
        );
    }

    return (
        <button className={cn(styles.button, className)} {...props}>
            {children}
        </button>
    );
};

export default Button;

import React from "react";
import cn from "classnames";

interface ButtonProps {
    size?: "sm" | "lg";
    type?: "primary" | "secondary";
    href?: string;
}

type Props = Omit<
    React.PropsWithChildren & React.HTMLProps<HTMLButtonElement>,
    "size"
> &
    ButtonProps;

const Button: React.FC<Props> = ({
    className,
    children,
    size: sz = "sm",
    type = "primary",
    href,
    ...props
}) => {
    if (href) {
        return (
            <a
                href={href}
                className={cn(
                    "button flex cursor-pointer items-center justify-center uppercase transition-all",
                    className,
                    {
                        ["rounded-[35px] p-[15px_20px] text-[11px] leading-[8px]"]:
                            sz === "sm",
                        ["rounded-[55px] p-[20px_25px] text-[14px] leading-[10px] max-[768px]:p-[10px_15px]"]:
                            sz === "lg",
                        ["bg-accent-green font-semibold text-blue-6 hover:bg-accent-green/90"]:
                            type === "primary",
                        ["bg-white/10 font-semibold text-blue-4 hover:bg-white/20"]:
                            type === "secondary",
                    },
                )}
            >
                {children}
            </a>
        );
    }

    return (
        <button
            className={cn(
                className,
                "button flex items-center justify-center uppercase transition-all disabled:cursor-not-allowed disabled:bg-accent-green/40",
                {
                    ["rounded-[35px] p-[15px_20px] text-[11px] leading-[8px]"]:
                        sz === "sm",
                    ["rounded-[55px] p-[20px_25px] text-[14px] leading-[10px] max-[768px]:p-[10px_15px] max-[768px]:text-[13px]"]:
                        sz === "lg",
                    ["bg-accent-green font-semibold text-blue-6 hover:bg-accent-green/90"]:
                        type === "primary",
                    ["bg-white/10 font-semibold text-blue-4 hover:bg-white/20"]:
                        type === "secondary",
                },
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;

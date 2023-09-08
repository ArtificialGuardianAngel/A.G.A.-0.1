import React, { HTMLAttributes } from "react";

type Props = Omit<
    HTMLAttributes<HTMLOrSVGElement>,
    "width" | "height" | "viewBox" | "fill" | "xmlns"
>;

export const ScrollBottomIcon = (props: Props) => {
    return (
        <svg
            width="28"
            height="50"
            viewBox="0 0 28 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M10 23L14 27L18 23"
                stroke="#ECECEC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <rect
                x="0.75"
                y="0.75"
                width="26.5"
                height="48.5"
                rx="13.25"
                stroke="#ECECEC"
                strokeWidth="1.5"
            />
        </svg>
    );
};

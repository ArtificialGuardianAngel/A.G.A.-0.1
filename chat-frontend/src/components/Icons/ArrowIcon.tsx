import React from "react";

interface Props
    extends Omit<
        React.HTMLAttributes<HTMLOrSVGElement>,
        "chilren" | "width" | "height" | "viewBox" | "fill" | "xmlns"
    > {
    color: string;
}

const ArrowIcon: React.FC<Props> = ({ color, ...rest }) => {
    return (
        <svg
            width="10"
            height="11"
            viewBox="0 0 10 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...rest}
        >
            <path
                d="M0.836422 5.2424L8.36686 5.2424M4.7561 0.999759L8.99874 5.2424L4.7561 9.39477"
                stroke={color}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default ArrowIcon;

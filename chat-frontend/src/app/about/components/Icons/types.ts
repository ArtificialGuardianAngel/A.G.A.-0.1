import { HTMLAttributes } from "react";

export type DefaultIconProps = Omit<
    HTMLAttributes<HTMLOrSVGElement>,
    "width" | "height" | "viewBox" | "fill" | "xmlns"
>;

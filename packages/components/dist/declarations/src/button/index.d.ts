import * as React from "react";
import type * as Polymorphic from "@reach/utils/polymorphic";
export declare type ButtonProps = React.ComponentProps<"button"> & {
    state?: "idle" | "disabled" | "pending";
    variant?: "primary" | "danger" | "neutral" | "transparent";
    size?: "sm" | "xs" | "xxs";
} & Pick<React.ComponentProps<typeof ButtonContent>, "icon">;
export declare const Button: Polymorphic.ForwardRefComponent<"button", ButtonProps>;
export declare function ButtonContent(props: {
    children?: React.ReactNode;
    icon?: {
        icon: React.ReactElement;
        position?: "start" | "end";
        gap?: "md" | "sm";
    };
}): JSX.Element;
export declare function ButtonActivityIndicator(): JSX.Element;

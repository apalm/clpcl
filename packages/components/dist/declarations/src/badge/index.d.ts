import * as React from "react";
import type * as Polymorphic from "@reach/utils/polymorphic";
export declare type BadgeProps = React.ComponentProps<"div"> & {
    variant?: "neutral" | "success" | "danger" | "info";
    size?: "m" | "sm";
};
export declare const Badge: Polymorphic.ForwardRefComponent<"div", BadgeProps>;

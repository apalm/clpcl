import * as React from "react";
import { AlertProps as RAlertProps } from "@reach/alert";
export declare type FlashMessageProps = RAlertProps & {
    variant: "success" | "error";
    onClose: () => void;
};
export declare const FlashMessage: React.ForwardRefExoticComponent<RAlertProps & {
    variant: "success" | "error";
    onClose: () => void;
} & React.RefAttributes<HTMLDivElement>>;

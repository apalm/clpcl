import * as React from "react";
import { AlertProps as RAlertProps } from "@reach/alert";
export declare type AlertProps = RAlertProps & {
    variant?: "error";
};
export declare const Alert: React.ForwardRefExoticComponent<RAlertProps & {
    variant?: "error" | undefined;
} & React.RefAttributes<HTMLDivElement>>;

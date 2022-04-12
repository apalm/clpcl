import * as React from "react";
import { FormControlProps } from "../form-control";
export declare type RadioGroupProps = {
    value: React.ComponentProps<"input">["value"];
    name: React.ComponentProps<"input">["name"];
    "aria-labelledby": string;
    children: React.ReactNode | React.ReactNode[];
};
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
export declare type RadioProps = React.ComponentProps<"input"> & {
    children: React.ReactNode;
} & Pick<FormControlProps, "error">;
export declare const Radio: React.ForwardRefExoticComponent<Pick<RadioProps, "error" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & React.RefAttributes<HTMLInputElement>>;
export declare function RadioGroupLabel(props: React.ComponentProps<"div">): JSX.Element;

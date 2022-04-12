import * as React from "react";
import { FormControlProps } from "../form-control";
export declare type InputProps = RawInputProps & Pick<FormControlProps, "label" | "helperText">;
export declare const Input: React.ForwardRefExoticComponent<Pick<InputProps, "error" | "label" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement> | "helperText"> & React.RefAttributes<any>>;
export declare type RawInputProps = React.ComponentProps<"input"> & Pick<FormControlProps, "error">;
export declare const RawInput: React.ForwardRefExoticComponent<Pick<RawInputProps, "error" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & React.RefAttributes<HTMLInputElement>>;

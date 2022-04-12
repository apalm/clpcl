import * as React from "react";
import { FormControlProps } from "../form-control";
export declare type CheckboxProps = RawCheckboxProps & Pick<FormControlProps, "label" | "helperText">;
export declare function Checkbox(props: CheckboxProps): JSX.Element;
export declare type RawCheckboxProps = React.ComponentProps<"input"> & Pick<FormControlProps, "error">;
export declare const RawCheckbox: React.ForwardRefExoticComponent<Pick<RawCheckboxProps, "error" | "key" | keyof React.InputHTMLAttributes<HTMLInputElement>> & React.RefAttributes<HTMLInputElement>>;

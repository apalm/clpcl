import * as React from "react";
import { FormControlProps } from "../form-control";
export declare type SelectProps = RawSelectProps & FormControlProps;
export declare function Select(props: SelectProps): JSX.Element;
export declare type RawSelectProps = React.ComponentProps<"select">;
export declare const RawSelect: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "key" | keyof React.SelectHTMLAttributes<HTMLSelectElement>> & React.RefAttributes<HTMLSelectElement>>;

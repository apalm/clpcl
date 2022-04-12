import * as React from "react";
import { FormControlProps } from "../form-control";
export declare type TextareaProps = RawTextareaProps & FormControlProps;
export declare function Textarea(props: TextareaProps): JSX.Element;
export declare type RawTextareaProps = React.ComponentProps<"textarea">;
export declare const RawTextarea: React.ForwardRefExoticComponent<Pick<React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, "key" | keyof React.TextareaHTMLAttributes<HTMLTextAreaElement>> & React.RefAttributes<HTMLTextAreaElement>>;

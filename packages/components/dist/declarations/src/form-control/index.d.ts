import * as React from "react";
export declare type FormControlProps = {
    children: React.ReactElement;
    label?: string | React.ReactElement | undefined;
    helperText?: string | React.ReactElement | undefined;
    error?: string | React.ReactElement | undefined;
};
export declare function FormControl(props: FormControlProps): JSX.Element;

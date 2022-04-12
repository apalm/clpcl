import * as React from "react";
export declare type AvatarProps = {
    size?: "xs" | "sm" | "lg" | "xl" | "xxl";
    fallback: {
        fallback: string;
        variant?: "solid" | "outline";
        length?: number;
        backgroundColor?: string;
        color?: string;
    };
};
export declare const Avatar: React.ForwardRefExoticComponent<Pick<React.ClassAttributes<HTMLImageElement> & React.ImgHTMLAttributes<HTMLImageElement> & AvatarProps, "key" | keyof React.ImgHTMLAttributes<HTMLImageElement> | keyof AvatarProps> & React.RefAttributes<any>>;

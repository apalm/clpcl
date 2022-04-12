import * as React from "react";
import { FormControl, FormControlProps } from "../form-control";

export type TextareaProps = RawTextareaProps & FormControlProps;

export function Textarea(props: TextareaProps) {
  const { label, error, ...restProps } = props;
  return (
    <FormControl label={label} error={error}>
      <RawTextarea
        // TODO
        // @ts-ignore
        ref={undefined}
        {...restProps}
      />
    </FormControl>
  );
}

export type RawTextareaProps = React.ComponentProps<"textarea">;

export const RawTextarea = React.forwardRef<
  HTMLTextAreaElement,
  RawTextareaProps
>((props, ref) => {
  const { ...restProps } = props;
  return (
    <textarea
      ref={ref}
      data-ph-vars-textarea=""
      data-ph-textarea=""
      // className={cx([
      //   formControlStyles.formControl,
      //   siz === "sm" && formControlStyles.formControlSm,
      //   siz === "xs" && formControlStyles.formControlXs,
      //   variant === "outline" && formControlStyles.formControlOutline,
      //   variant === "filled" && formControlStyles.formControlFilled,
      //   error && formControlStyles.invalid,
      // ])}
      {...restProps}
    />
  );
});

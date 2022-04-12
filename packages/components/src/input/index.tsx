import * as React from "react";
import { FormControl, FormControlProps } from "../form-control";

export type InputProps = RawInputProps &
  Pick<FormControlProps, "label" | "helperText">;

export const Input = React.forwardRef<any, InputProps>((props, ref) => {
  const { label, helperText, error, ...restProps } = props;
  return (
    <FormControl label={label} helperText={helperText} error={error}>
      <RawInput
        // TODO
        // @ts-ignore
        ref={ref}
        {...restProps}
      />
    </FormControl>
  );
});

export type RawInputProps = React.ComponentProps<"input"> &
  Pick<FormControlProps, "error">;

export const RawInput = React.forwardRef<HTMLInputElement, RawInputProps>(
  (props, ref) => {
    const {
      error,
      // See FormControl
      // @ts-ignore
      errorMessageElementId,
      ...restProps
    } = props;
    return (
      <input
        ref={ref}
        data-ph-input=""
        aria-invalid={error ? "true" : undefined}
        aria-errormessage={errorMessageElementId}
        {...restProps}
      />
    );
  }
);

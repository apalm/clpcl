import * as React from "react";
import { FormControlProps } from "../form-control";

// TODO: use reach checkbox

export type CheckboxProps = RawCheckboxProps &
  Pick<FormControlProps, "label" | "helperText">;

export function Checkbox(props: CheckboxProps) {
  const { label, error, ...restProps } = props;
  return (
    <label data-ph-checkbox-label="">
      <RawCheckbox
        // TODO
        // @ts-ignore
        ref={undefined}
        {...restProps}
      />
      <span>{label}</span>
    </label>
  );
}

export type RawCheckboxProps = React.ComponentProps<"input"> &
  Pick<FormControlProps, "error">;

export const RawCheckbox = React.forwardRef<HTMLInputElement, RawCheckboxProps>(
  (props, ref) => {
    const { ...restProps } = props;
    return (
      <input ref={ref} data-ph-checkbox="" {...restProps} type="checkbox" />
    );
  }
);

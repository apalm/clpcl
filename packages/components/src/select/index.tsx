import * as React from "react";
import { FormControl, FormControlProps } from "../form-control";

export type SelectProps = RawSelectProps & FormControlProps;

export function Select(props: SelectProps) {
  const { label, error, ...restProps } = props;
  return (
    <FormControl label={label} error={error}>
      <RawSelect
        // TODO
        // @ts-ignore
        ref={undefined}
        {...restProps}
      />
    </FormControl>
  );
}

export type RawSelectProps = React.ComponentProps<"select">;

export const RawSelect = React.forwardRef<HTMLSelectElement, RawSelectProps>(
  (props, ref) => {
    const { ...restProps } = props;
    return (
      <select
        ref={ref}
        data-ph-vars-select=""
        data-ph-select=""
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
  }
);

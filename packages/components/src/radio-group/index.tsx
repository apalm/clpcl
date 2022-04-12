import * as React from "react";
import { FormControlProps } from "../form-control";

// TODO: use Reach UI's RadioGroup, if it gets implemented

export type RadioGroupProps = {
  value: React.ComponentProps<"input">["value"];
  name: React.ComponentProps<"input">["name"];
  "aria-labelledby": string;
  children: React.ReactNode | React.ReactNode[];
};

const RadioGroupContext = React.createContext<
  Pick<RadioGroupProps, "value" | "name">
>(
  // @ts-ignore
  undefined
);

export function RadioGroup(props: RadioGroupProps) {
  const { value, name, ...restProps } = props;
  return (
    <RadioGroupContext.Provider value={{ value, name }}>
      <div data-ph-radio="" {...restProps} />
    </RadioGroupContext.Provider>
  );
}

export type RadioProps = React.ComponentProps<"input"> & {
  children: React.ReactNode;
} & Pick<FormControlProps, "error">;

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  (props, ref) => {
    const { children, ...restProps } = props;
    const { value, name } = React.useContext(RadioGroupContext);
    const defaultChecked =
      value === props.defaultValue || value === props.value;
    return (
      <label data-ph-radio-group-radio-label="">
        <input
          ref={ref}
          data-ph-radio-group-radio=""
          name={name}
          defaultChecked={defaultChecked}
          {...restProps}
          type="radio"
        />
        {children}
      </label>
    );
  }
);

export function RadioGroupLabel(props: React.ComponentProps<"div">) {
  return <div data-ph-radio-group-label {...props} />;
}

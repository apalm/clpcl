import * as React from "react";
import { Alert as RAlert, AlertProps as RAlertProps } from "@reach/alert";
import { MdError } from "react-icons/md";

export type AlertProps = RAlertProps & { variant?: "error" };

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (props, ref) => {
    const { variant = "error", children, ...restProps } = props;
    const Icon = MdError;
    return (
      <RAlert
        ref={ref}
        data-ph-alert=""
        data-ph-alert-variant={variant}
        {...restProps}
      >
        <Icon />
        {children}
      </RAlert>
    );
  }
);

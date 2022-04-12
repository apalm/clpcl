import * as React from "react";
import { Portal } from "@reach/portal";
import { Alert as RAlert, AlertProps as RAlertProps } from "@reach/alert";
import { MdError, MdCheckCircle, MdClose } from "react-icons/md";
import { Pressable } from "../pressable";

export type FlashMessageProps = RAlertProps & {
  variant: "success" | "error";
  onClose: () => void;
};

export const FlashMessage = React.forwardRef<HTMLDivElement, FlashMessageProps>(
  (props, ref) => {
    const { variant, onClose, children, ...restProps } = props;
    const Icon = variant === "success" ? MdCheckCircle : MdError;
    return (
      <Portal>
        <RAlert
          ref={ref}
          data-ph-flash-message=""
          data-ph-flash-message-variant={variant}
          {...restProps}
        >
          <Icon />
          {children}
          <Pressable onClick={onClose}>
            <MdClose />
          </Pressable>
        </RAlert>
      </Portal>
    );
  }
);

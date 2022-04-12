import * as React from "react";
import type * as Polymorphic from "@reach/utils/polymorphic";

export type BadgeProps = React.ComponentProps<"div"> & {
  variant?: "neutral" | "success" | "danger" | "info";
  size?: "m" | "sm";
};

export const Badge = React.forwardRef((props, ref) => {
  const {
    as: Comp = "div",
    variant = "neutral",
    size = "m",
    ...restProps
  } = props;
  return (
    <Comp
      ref={ref}
      data-ph-badge=""
      data-ph-badge-variant={variant}
      data-ph-badge-size={size}
      {...restProps}
    />
  );
}) as Polymorphic.ForwardRefComponent<"div", BadgeProps>;

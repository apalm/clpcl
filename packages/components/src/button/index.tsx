import * as React from "react";
import type * as Polymorphic from "@reach/utils/polymorphic";

export type ButtonProps = React.ComponentProps<"button"> & {
  state?: "idle" | "disabled" | "pending";
  variant?: "primary" | "danger" | "neutral" | "transparent";
  size?: "sm" | "xs" | "xxs";
} & Pick<React.ComponentProps<typeof ButtonContent>, "icon">;

export const Button = React.forwardRef((props, ref) => {
  const {
    as: Comp = "button",
    state = "idle",
    variant = "primary",
    size,
    disabled,
    icon,
    children,
    ...restProps
  } = props;
  return (
    <Comp
      ref={ref}
      // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
      onTouchStart={() => {}}
      data-ph-vars-button=""
      data-ph-button=""
      data-ph-button-variant={variant}
      data-ph-button-size={size}
      disabled={
        Comp === "button"
          ? disabled ?? ["pending", "disabled"].includes(state)
          : undefined
      }
      {...restProps}
    >
      <ButtonContent icon={state === "pending" ? undefined : icon}>
        {state === "pending" ? <ButtonActivityIndicator /> : children}
      </ButtonContent>
    </Comp>
  );
}) as Polymorphic.ForwardRefComponent<"button", ButtonProps>;

export function ButtonContent(props: {
  children?: React.ReactNode;
  icon?: {
    icon: React.ReactElement;
    position?: "start" | "end";
    gap?: "md" | "sm";
  };
}) {
  const { children, icon } = props;
  if (icon == null) {
    return <>{children}</>;
  }
  const position = icon?.position ?? "start";
  const gap = icon?.gap ?? "md";
  if (children == null) {
    return <>{icon.icon}</>;
  }
  return (
    <div
      data-ph-button-content=""
      data-ph-button-content-icon-position={position}
      data-ph-button-content-gap={gap}
    >
      {position === "start" ? (
        <>
          {icon.icon}
          {children}
        </>
      ) : (
        <>
          {children}
          {icon.icon}
        </>
      )}
    </div>
  );
}

const size = 24;

export function ButtonActivityIndicator() {
  return (
    <div data-ph-button-activity-indicator="">
      <svg viewBox={`0 0 ${size} ${size}`}>
        <circle
          opacity={0.2}
          cx={`${size / 2}px`}
          cy={`${size / 2}px`}
          fill="none"
          r={`${size / 2 - 6}px`}
          strokeWidth="2px"
        />
        <circle
          strokeDasharray={80}
          strokeDashoffset={60}
          cx={`${size / 2}px`}
          cy={`${size / 2}px`}
          fill="none"
          r={`${size / 2 - 6}px`}
          strokeWidth="2px"
        />
      </svg>
    </div>
  );
}

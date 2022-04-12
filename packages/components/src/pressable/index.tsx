import * as React from "react";
import type * as Polymorphic from "@reach/utils/polymorphic";

export type PressableProps = React.ComponentProps<"button">;

export const Pressable = React.forwardRef((props, ref) => {
  const { as: Comp = "button", ...rest } = props;
  return (
    <Comp
      // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
      onTouchStart={() => {}}
      ref={ref}
      type={Comp === "button" ? "button" : undefined}
      data-ph-vars-pressable=""
      data-ph-pressable=""
      {...rest}
    />
  );
}) as Polymorphic.ForwardRefComponent<"button", PressableProps>;

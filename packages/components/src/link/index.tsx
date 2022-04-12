import * as React from "react";
import type * as Polymorphic from "@reach/utils/polymorphic";

export type LinkProps = React.ComponentProps<"a">;

export const Link = React.forwardRef((props, ref) => {
  const { as: Comp = "a", ...rest } = props;
  return (
    <Comp
      // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
      onTouchStart={() => {}}
      ref={ref}
      data-ph-vars-link=""
      data-ph-link=""
      {...rest}
    />
  );
}) as Polymorphic.ForwardRefComponent<"a", LinkProps>;

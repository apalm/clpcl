import * as React from "react";

export type AvatarProps = {
  size?: "xs" | "sm" | "lg" | "xl" | "xxl";
  fallback: {
    fallback: string;
    variant?: "solid" | "outline";
    length?: number;
    backgroundColor?: string;
    color?: string;
  };
};

export const Avatar = React.forwardRef<
  any,
  React.ComponentProps<"img"> & AvatarProps
>((props, ref) => {
  const { alt, size, fallback, className, ...restProps } = props;
  const [shouldShowFallback, setShouldShowFallback] = React.useState(
    !restProps.src
  );
  if (shouldShowFallback) {
    const content =
      fallback.length === 0
        ? "U"
        : fallback.fallback.slice(0, fallback.length ?? 1).toLocaleUpperCase();
    const fallbackVariant = fallback.variant ?? "solid";
    return (
      <div
        ref={ref}
        data-ph-avatar=""
        data-ph-avatar-size={size}
        data-ph-avatar-fallback-variant={fallbackVariant}
        style={
          fallback.backgroundColor == null && fallback.color == null
            ? undefined
            : {
                backgroundColor: fallback.backgroundColor,
                color: fallback.color,
              }
        }
      >
        {content}
      </div>
    );
  }
  return (
    <img
      ref={ref}
      alt={alt}
      data-ph-avatar=""
      data-ph-avatar-size={size}
      onError={() => {
        setShouldShowFallback(true);
      }}
      {...restProps}
    />
  );
});

import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';

const Avatar = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    alt,
    size,
    fallback,
    className,
    ...restProps
  } = props;
  const [shouldShowFallback, setShouldShowFallback] = React.useState(!restProps.src);

  if (shouldShowFallback) {
    const content = fallback.length === 0 ? "U" : fallback.fallback.slice(0, fallback.length ?? 1).toLocaleUpperCase();
    const fallbackVariant = fallback.variant ?? "solid";
    return /*#__PURE__*/React.createElement("div", {
      ref: ref,
      "data-ph-avatar": "",
      "data-ph-avatar-size": size,
      "data-ph-avatar-fallback-variant": fallbackVariant,
      style: fallback.backgroundColor == null && fallback.color == null ? undefined : {
        backgroundColor: fallback.backgroundColor,
        color: fallback.color
      }
    }, content);
  }

  return /*#__PURE__*/React.createElement("img", _extends({
    ref: ref,
    alt: alt,
    "data-ph-avatar": "",
    "data-ph-avatar-size": size,
    onError: () => {
      setShouldShowFallback(true);
    }
  }, restProps));
});

export { Avatar };

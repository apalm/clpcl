import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';

const Badge = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    as: Comp = "div",
    variant = "neutral",
    size = "m",
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref,
    "data-ph-badge": "",
    "data-ph-badge-variant": variant,
    "data-ph-badge-size": size
  }, restProps));
});

export { Badge };

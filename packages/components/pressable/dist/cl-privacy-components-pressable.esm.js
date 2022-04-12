import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';

const Pressable = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    as: Comp = "button",
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Comp // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
  , _extends({
    onTouchStart: () => {},
    ref: ref,
    type: Comp === "button" ? "button" : undefined,
    "data-ph-vars-pressable": "",
    "data-ph-pressable": ""
  }, rest));
});

export { Pressable };

import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';

const Link = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    as: Comp = "a",
    ...rest
  } = props;
  return /*#__PURE__*/React.createElement(Comp // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
  , _extends({
    onTouchStart: () => {},
    ref: ref,
    "data-ph-vars-link": "",
    "data-ph-link": ""
  }, rest));
});

export { Link };

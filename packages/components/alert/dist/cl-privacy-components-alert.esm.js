import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';
import { Alert as Alert$1 } from '@reach/alert';
import { MdError } from 'react-icons/md';

const Alert = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    variant = "error",
    children,
    ...restProps
  } = props;
  const Icon = MdError;
  return /*#__PURE__*/React.createElement(Alert$1, _extends({
    ref: ref,
    "data-ph-alert": "",
    "data-ph-alert-variant": variant
  }, restProps), /*#__PURE__*/React.createElement(Icon, null), children);
});

export { Alert };

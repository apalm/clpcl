import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';
import { Portal } from '@reach/portal';
import { Alert } from '@reach/alert';
import { MdClose, MdCheckCircle, MdError } from 'react-icons/md';
import { Pressable } from '../../pressable/dist/cl-privacy-components-pressable.esm.js';

const FlashMessage = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    variant,
    onClose,
    children,
    ...restProps
  } = props;
  const Icon = variant === "success" ? MdCheckCircle : MdError;
  return /*#__PURE__*/React.createElement(Portal, null, /*#__PURE__*/React.createElement(Alert, _extends({
    ref: ref,
    "data-ph-flash-message": "",
    "data-ph-flash-message-variant": variant
  }, restProps), /*#__PURE__*/React.createElement(Icon, null), children, /*#__PURE__*/React.createElement(Pressable, {
    onClick: onClose
  }, /*#__PURE__*/React.createElement(MdClose, null))));
});

export { FlashMessage };

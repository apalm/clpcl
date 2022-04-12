import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';
import { FormControl } from '../../form-control/dist/cl-privacy-components-form-control.esm.js';

const Input = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    label,
    helperText,
    error,
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement(FormControl, {
    label: label,
    helperText: helperText,
    error: error
  }, /*#__PURE__*/React.createElement(RawInput // TODO
  // @ts-ignore
  , _extends({
    ref: ref
  }, restProps)));
});
const RawInput = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    error,
    // See FormControl
    // @ts-ignore
    errorMessageElementId,
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    "data-ph-input": "",
    "aria-invalid": error ? "true" : undefined,
    "aria-errormessage": errorMessageElementId
  }, restProps));
});

export { Input, RawInput };

import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';

function Checkbox(props) {
  const {
    label,
    error,
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement("label", {
    "data-ph-checkbox-label": ""
  }, /*#__PURE__*/React.createElement(RawCheckbox // TODO
  // @ts-ignore
  , _extends({
    ref: undefined
  }, restProps)), /*#__PURE__*/React.createElement("span", null, label));
}
const RawCheckbox = /*#__PURE__*/React.forwardRef((props, ref) => {
  const { ...restProps
  } = props;
  return /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    "data-ph-checkbox": ""
  }, restProps, {
    type: "checkbox"
  }));
});

export { Checkbox, RawCheckbox };

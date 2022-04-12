import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';

const RadioGroupContext = /*#__PURE__*/React.createContext( // @ts-ignore
undefined);
function RadioGroup(props) {
  const {
    value,
    name,
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement(RadioGroupContext.Provider, {
    value: {
      value,
      name
    }
  }, /*#__PURE__*/React.createElement("div", _extends({
    "data-ph-radio": ""
  }, restProps)));
}
const Radio = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children,
    ...restProps
  } = props;
  const {
    value,
    name
  } = React.useContext(RadioGroupContext);
  const defaultChecked = value === props.defaultValue || value === props.value;
  return /*#__PURE__*/React.createElement("label", {
    "data-ph-radio-group-radio-label": ""
  }, /*#__PURE__*/React.createElement("input", _extends({
    ref: ref,
    "data-ph-radio-group-radio": "",
    name: name,
    defaultChecked: defaultChecked
  }, restProps, {
    type: "radio"
  })), children);
});
function RadioGroupLabel(props) {
  return /*#__PURE__*/React.createElement("div", _extends({
    "data-ph-radio-group-label": true
  }, props));
}

export { Radio, RadioGroup, RadioGroupLabel };

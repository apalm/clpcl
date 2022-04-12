'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('../../dist/extends-93eedbb0.cjs.dev.js');
var React = require('react');

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

const RadioGroupContext = /*#__PURE__*/React__namespace.createContext( // @ts-ignore
undefined);
function RadioGroup(props) {
  const {
    value,
    name,
    ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement(RadioGroupContext.Provider, {
    value: {
      value,
      name
    }
  }, /*#__PURE__*/React__namespace.createElement("div", _extends._extends({
    "data-ph-radio": ""
  }, restProps)));
}
const Radio = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    children,
    ...restProps
  } = props;
  const {
    value,
    name
  } = React__namespace.useContext(RadioGroupContext);
  const defaultChecked = value === props.defaultValue || value === props.value;
  return /*#__PURE__*/React__namespace.createElement("label", {
    "data-ph-radio-group-radio-label": ""
  }, /*#__PURE__*/React__namespace.createElement("input", _extends._extends({
    ref: ref,
    "data-ph-radio-group-radio": "",
    name: name,
    defaultChecked: defaultChecked
  }, restProps, {
    type: "radio"
  })), children);
});
function RadioGroupLabel(props) {
  return /*#__PURE__*/React__namespace.createElement("div", _extends._extends({
    "data-ph-radio-group-label": true
  }, props));
}

exports.Radio = Radio;
exports.RadioGroup = RadioGroup;
exports.RadioGroupLabel = RadioGroupLabel;

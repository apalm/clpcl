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

function Checkbox(props) {
  const {
    label,
    error,
    ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement("label", {
    "data-ph-checkbox-label": ""
  }, /*#__PURE__*/React__namespace.createElement(RawCheckbox // TODO
  // @ts-ignore
  , _extends._extends({
    ref: undefined
  }, restProps)), /*#__PURE__*/React__namespace.createElement("span", null, label));
}
const RawCheckbox = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const { ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement("input", _extends._extends({
    ref: ref,
    "data-ph-checkbox": ""
  }, restProps, {
    type: "checkbox"
  }));
});

exports.Checkbox = Checkbox;
exports.RawCheckbox = RawCheckbox;

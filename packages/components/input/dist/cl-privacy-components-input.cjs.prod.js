'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('../../dist/extends-f26277ce.cjs.prod.js');
var React = require('react');
var formControl_dist_clPrivacyComponentsFormControl = require('../../form-control/dist/cl-privacy-components-form-control.cjs.prod.js');

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

const Input = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    label,
    helperText,
    error,
    ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement(formControl_dist_clPrivacyComponentsFormControl.FormControl, {
    label: label,
    helperText: helperText,
    error: error
  }, /*#__PURE__*/React__namespace.createElement(RawInput // TODO
  // @ts-ignore
  , _extends._extends({
    ref: ref
  }, restProps)));
});
const RawInput = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    error,
    // See FormControl
    // @ts-ignore
    errorMessageElementId,
    ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement("input", _extends._extends({
    ref: ref,
    "data-ph-input": "",
    "aria-invalid": error ? "true" : undefined,
    "aria-errormessage": errorMessageElementId
  }, restProps));
});

exports.Input = Input;
exports.RawInput = RawInput;

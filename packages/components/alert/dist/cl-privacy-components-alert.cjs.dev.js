'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('../../dist/extends-93eedbb0.cjs.dev.js');
var React = require('react');
var alert = require('@reach/alert');
var md = require('react-icons/md');

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

const Alert = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    variant = "error",
    children,
    ...restProps
  } = props;
  const Icon = md.MdError;
  return /*#__PURE__*/React__namespace.createElement(alert.Alert, _extends._extends({
    ref: ref,
    "data-ph-alert": "",
    "data-ph-alert-variant": variant
  }, restProps), /*#__PURE__*/React__namespace.createElement(Icon, null), children);
});

exports.Alert = Alert;

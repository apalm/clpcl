'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var alertDialog = require('@reach/alert-dialog');

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

function AlertDialogActions(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/React__namespace.createElement("div", {
    "data-ph-alert-dialog-actions": ""
  }, children);
}

exports.AlertDialogActions = AlertDialogActions;
Object.keys(alertDialog).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return alertDialog[k]; }
  });
});

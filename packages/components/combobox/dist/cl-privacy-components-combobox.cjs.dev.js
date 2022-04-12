'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('../../dist/extends-93eedbb0.cjs.dev.js');
var React = require('react');
var combobox = require('@reach/combobox');

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

const ComboboxInput = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  return /*#__PURE__*/React__namespace.createElement(combobox.ComboboxInput, _extends._extends({
    ref: ref,
    "data-ph-input": ""
  }, props));
});

exports.ComboboxInput = ComboboxInput;
Object.keys(combobox).forEach(function (k) {
  if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
    enumerable: true,
    get: function () { return combobox[k]; }
  });
});

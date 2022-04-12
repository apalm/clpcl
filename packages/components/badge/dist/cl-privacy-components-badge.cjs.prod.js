'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('../../dist/extends-f26277ce.cjs.prod.js');
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

const Badge = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    as: Comp = "div",
    variant = "neutral",
    size = "m",
    ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement(Comp, _extends._extends({
    ref: ref,
    "data-ph-badge": "",
    "data-ph-badge-variant": variant,
    "data-ph-badge-size": size
  }, restProps));
});

exports.Badge = Badge;

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

const Pressable = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    as: Comp = "button",
    ...rest
  } = props;
  return /*#__PURE__*/React__namespace.createElement(Comp // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
  , _extends._extends({
    onTouchStart: () => {},
    ref: ref,
    type: Comp === "button" ? "button" : undefined,
    "data-ph-vars-pressable": "",
    "data-ph-pressable": ""
  }, rest));
});

exports.Pressable = Pressable;

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

const Avatar = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    alt,
    size,
    fallback,
    className,
    ...restProps
  } = props;
  const [shouldShowFallback, setShouldShowFallback] = React__namespace.useState(!restProps.src);

  if (shouldShowFallback) {
    const content = fallback.length === 0 ? "U" : fallback.fallback.slice(0, fallback.length ?? 1).toLocaleUpperCase();
    const fallbackVariant = fallback.variant ?? "solid";
    return /*#__PURE__*/React__namespace.createElement("div", {
      ref: ref,
      "data-ph-avatar": "",
      "data-ph-avatar-size": size,
      "data-ph-avatar-fallback-variant": fallbackVariant,
      style: fallback.backgroundColor == null && fallback.color == null ? undefined : {
        backgroundColor: fallback.backgroundColor,
        color: fallback.color
      }
    }, content);
  }

  return /*#__PURE__*/React__namespace.createElement("img", _extends._extends({
    ref: ref,
    alt: alt,
    "data-ph-avatar": "",
    "data-ph-avatar-size": size,
    onError: () => {
      setShouldShowFallback(true);
    }
  }, restProps));
});

exports.Avatar = Avatar;

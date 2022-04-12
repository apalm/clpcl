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

const Button = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    as: Comp = "button",
    state = "idle",
    variant = "primary",
    size,
    disabled,
    icon,
    children,
    ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement(Comp, _extends._extends({
    ref: ref // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
    ,
    onTouchStart: () => {},
    "data-ph-vars-button": "",
    "data-ph-button": "",
    "data-ph-button-variant": variant,
    "data-ph-button-size": size,
    disabled: Comp === "button" ? disabled ?? ["pending", "disabled"].includes(state) : undefined
  }, restProps), /*#__PURE__*/React__namespace.createElement(ButtonContent, {
    icon: state === "pending" ? undefined : icon
  }, state === "pending" ? /*#__PURE__*/React__namespace.createElement(ButtonActivityIndicator, null) : children));
});
function ButtonContent(props) {
  const {
    children,
    icon
  } = props;

  if (icon == null) {
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, children);
  }

  const position = icon?.position ?? "start";
  const gap = icon?.gap ?? "md";

  if (children == null) {
    return /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, icon.icon);
  }

  return /*#__PURE__*/React__namespace.createElement("div", {
    "data-ph-button-content": "",
    "data-ph-button-content-icon-position": position,
    "data-ph-button-content-gap": gap
  }, position === "start" ? /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, icon.icon, children) : /*#__PURE__*/React__namespace.createElement(React__namespace.Fragment, null, children, icon.icon));
}
const size = 24;
function ButtonActivityIndicator() {
  return /*#__PURE__*/React__namespace.createElement("div", {
    "data-ph-button-activity-indicator": ""
  }, /*#__PURE__*/React__namespace.createElement("svg", {
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React__namespace.createElement("circle", {
    opacity: 0.2,
    cx: `${size / 2}px`,
    cy: `${size / 2}px`,
    fill: "none",
    r: `${size / 2 - 6}px`,
    strokeWidth: "2px"
  }), /*#__PURE__*/React__namespace.createElement("circle", {
    strokeDasharray: 80,
    strokeDashoffset: 60,
    cx: `${size / 2}px`,
    cy: `${size / 2}px`,
    fill: "none",
    r: `${size / 2 - 6}px`,
    strokeWidth: "2px"
  })));
}

exports.Button = Button;
exports.ButtonActivityIndicator = ButtonActivityIndicator;
exports.ButtonContent = ButtonContent;

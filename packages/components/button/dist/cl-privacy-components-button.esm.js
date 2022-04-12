import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';

const Button = /*#__PURE__*/React.forwardRef((props, ref) => {
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
  return /*#__PURE__*/React.createElement(Comp, _extends({
    ref: ref // https://stackoverflow.com/questions/3885018/active-pseudo-class-doesnt-work-in-mobile-safari
    ,
    onTouchStart: () => {},
    "data-ph-vars-button": "",
    "data-ph-button": "",
    "data-ph-button-variant": variant,
    "data-ph-button-size": size,
    disabled: Comp === "button" ? disabled ?? ["pending", "disabled"].includes(state) : undefined
  }, restProps), /*#__PURE__*/React.createElement(ButtonContent, {
    icon: state === "pending" ? undefined : icon
  }, state === "pending" ? /*#__PURE__*/React.createElement(ButtonActivityIndicator, null) : children));
});
function ButtonContent(props) {
  const {
    children,
    icon
  } = props;

  if (icon == null) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  }

  const position = icon?.position ?? "start";
  const gap = icon?.gap ?? "md";

  if (children == null) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, icon.icon);
  }

  return /*#__PURE__*/React.createElement("div", {
    "data-ph-button-content": "",
    "data-ph-button-content-icon-position": position,
    "data-ph-button-content-gap": gap
  }, position === "start" ? /*#__PURE__*/React.createElement(React.Fragment, null, icon.icon, children) : /*#__PURE__*/React.createElement(React.Fragment, null, children, icon.icon));
}
const size = 24;
function ButtonActivityIndicator() {
  return /*#__PURE__*/React.createElement("div", {
    "data-ph-button-activity-indicator": ""
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${size} ${size}`
  }, /*#__PURE__*/React.createElement("circle", {
    opacity: 0.2,
    cx: `${size / 2}px`,
    cy: `${size / 2}px`,
    fill: "none",
    r: `${size / 2 - 6}px`,
    strokeWidth: "2px"
  }), /*#__PURE__*/React.createElement("circle", {
    strokeDasharray: 80,
    strokeDashoffset: 60,
    cx: `${size / 2}px`,
    cy: `${size / 2}px`,
    fill: "none",
    r: `${size / 2 - 6}px`,
    strokeWidth: "2px"
  })));
}

export { Button, ButtonActivityIndicator, ButtonContent };

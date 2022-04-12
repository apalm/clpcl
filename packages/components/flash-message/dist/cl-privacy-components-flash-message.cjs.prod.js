'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('../../dist/extends-f26277ce.cjs.prod.js');
var React = require('react');
var portal = require('@reach/portal');
var alert = require('@reach/alert');
var md = require('react-icons/md');
var pressable_dist_clPrivacyComponentsPressable = require('../../pressable/dist/cl-privacy-components-pressable.cjs.prod.js');

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

const FlashMessage = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const {
    variant,
    onClose,
    children,
    ...restProps
  } = props;
  const Icon = variant === "success" ? md.MdCheckCircle : md.MdError;
  return /*#__PURE__*/React__namespace.createElement(portal.Portal, null, /*#__PURE__*/React__namespace.createElement(alert.Alert, _extends._extends({
    ref: ref,
    "data-ph-flash-message": "",
    "data-ph-flash-message-variant": variant
  }, restProps), /*#__PURE__*/React__namespace.createElement(Icon, null), children, /*#__PURE__*/React__namespace.createElement(pressable_dist_clPrivacyComponentsPressable.Pressable, {
    onClick: onClose
  }, /*#__PURE__*/React__namespace.createElement(md.MdClose, null))));
});

exports.FlashMessage = FlashMessage;

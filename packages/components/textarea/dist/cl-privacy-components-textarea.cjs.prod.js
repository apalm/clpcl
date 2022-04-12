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

function Textarea(props) {
  const {
    label,
    error,
    ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement(formControl_dist_clPrivacyComponentsFormControl.FormControl, {
    label: label,
    error: error
  }, /*#__PURE__*/React__namespace.createElement(RawTextarea // TODO
  // @ts-ignore
  , _extends._extends({
    ref: undefined
  }, restProps)));
}
const RawTextarea = /*#__PURE__*/React__namespace.forwardRef((props, ref) => {
  const { ...restProps
  } = props;
  return /*#__PURE__*/React__namespace.createElement("textarea", _extends._extends({
    ref: ref,
    "data-ph-vars-textarea": "",
    "data-ph-textarea": "" // className={cx([
    //   formControlStyles.formControl,
    //   siz === "sm" && formControlStyles.formControlSm,
    //   siz === "xs" && formControlStyles.formControlXs,
    //   variant === "outline" && formControlStyles.formControlOutline,
    //   variant === "filled" && formControlStyles.formControlFilled,
    //   error && formControlStyles.invalid,
    // ])}

  }, restProps));
});

exports.RawTextarea = RawTextarea;
exports.Textarea = Textarea;

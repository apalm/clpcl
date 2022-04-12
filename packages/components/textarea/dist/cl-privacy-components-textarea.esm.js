import { _ as _extends } from '../../dist/extends-1b905a27.esm.js';
import * as React from 'react';
import { FormControl } from '../../form-control/dist/cl-privacy-components-form-control.esm.js';

function Textarea(props) {
  const {
    label,
    error,
    ...restProps
  } = props;
  return /*#__PURE__*/React.createElement(FormControl, {
    label: label,
    error: error
  }, /*#__PURE__*/React.createElement(RawTextarea // TODO
  // @ts-ignore
  , _extends({
    ref: undefined
  }, restProps)));
}
const RawTextarea = /*#__PURE__*/React.forwardRef((props, ref) => {
  const { ...restProps
  } = props;
  return /*#__PURE__*/React.createElement("textarea", _extends({
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

export { RawTextarea, Textarea };

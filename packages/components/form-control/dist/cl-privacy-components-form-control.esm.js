import * as React from 'react';

function FormControl(props) {
  const {
    children: _children,
    label,
    helperText,
    error
  } = props; // TODO: use useId when we update to React 18

  const errorMessageElementId = error ? `error-${_children.props.name}` : undefined;
  const children = error ? /*#__PURE__*/React.cloneElement(_children, {
    error,
    errorMessageElementId
  }) : _children;
  const labelAndChildrenElement = label ? /*#__PURE__*/React.createElement("label", {
    "data-ph-form-control-label": ""
  }, label, children) : children;
  const bottomElement = error ? /*#__PURE__*/React.createElement("p", {
    id: errorMessageElementId,
    role: "alert",
    "data-ph-form-control-error": ""
  }, error) : helperText ? /*#__PURE__*/React.createElement("p", {
    "data-ph-form-control-helper-text": ""
  }, helperText) : null;
  return /*#__PURE__*/React.createElement("div", {
    "data-ph-form-control": ""
  }, labelAndChildrenElement, bottomElement);
}

export { FormControl };

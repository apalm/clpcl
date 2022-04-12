'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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

function FormControl(props) {
  const {
    children: _children,
    label,
    helperText,
    error
  } = props; // TODO: use useId when we update to React 18

  const errorMessageElementId = error ? `error-${_children.props.name}` : undefined;
  const children = error ? /*#__PURE__*/React__namespace.cloneElement(_children, {
    error,
    errorMessageElementId
  }) : _children;
  const labelAndChildrenElement = label ? /*#__PURE__*/React__namespace.createElement("label", {
    "data-ph-form-control-label": ""
  }, label, children) : children;
  const bottomElement = error ? /*#__PURE__*/React__namespace.createElement("p", {
    id: errorMessageElementId,
    role: "alert",
    "data-ph-form-control-error": ""
  }, error) : helperText ? /*#__PURE__*/React__namespace.createElement("p", {
    "data-ph-form-control-helper-text": ""
  }, helperText) : null;
  return /*#__PURE__*/React__namespace.createElement("div", {
    "data-ph-form-control": ""
  }, labelAndChildrenElement, bottomElement);
}

exports.FormControl = FormControl;

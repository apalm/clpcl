import * as React from "react";

export type FormControlProps = {
  children: React.ReactElement;
  label?: string | React.ReactElement | undefined;
  helperText?: string | React.ReactElement | undefined;
  error?: string | React.ReactElement | undefined;
};

export function FormControl(props: FormControlProps) {
  const { children: _children, label, helperText, error } = props;
  // TODO: use useId when we update to React 18
  const errorMessageElementId = error
    ? `error-${_children.props.name}`
    : undefined;
  const children = error
    ? React.cloneElement(_children, { error, errorMessageElementId })
    : _children;
  const labelAndChildrenElement = label ? (
    <label data-ph-form-control-label="">
      {label}
      {children}
    </label>
  ) : (
    children
  );
  const bottomElement = error ? (
    <p id={errorMessageElementId} role="alert" data-ph-form-control-error="">
      {error}
    </p>
  ) : helperText ? (
    <p data-ph-form-control-helper-text="">{helperText}</p>
  ) : null;
  return (
    <div data-ph-form-control="">
      {labelAndChildrenElement}
      {bottomElement}
    </div>
  );
}

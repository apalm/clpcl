import * as React from 'react';
export * from '@reach/alert-dialog';

function AlertDialogActions(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    "data-ph-alert-dialog-actions": ""
  }, children);
}

export { AlertDialogActions };

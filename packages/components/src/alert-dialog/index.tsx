import * as React from "react";

export * from "@reach/alert-dialog";

export function AlertDialogActions(props: { children: React.ReactNode }) {
  const { children } = props;
  return <div data-ph-alert-dialog-actions="">{children}</div>;
}

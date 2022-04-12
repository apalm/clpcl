import * as React from "react";
import { ComboboxInput as RComboboxInput } from "@reach/combobox";

export * from "@reach/combobox";

export const ComboboxInput = React.forwardRef((props, ref) => {
  return <RComboboxInput ref={ref} data-ph-input="" {...props} />;
}) as typeof RComboboxInput;

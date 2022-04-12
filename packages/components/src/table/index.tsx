import * as React from "react";

export type TableProps = React.ComponentProps<"table">;

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  (props, ref) => {
    return <table ref={ref} {...props} />;
  }
);

import { ReactNode } from "react";

export const FlexItem = ({ children }: { children: ReactNode }) => {
  const flexed = {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 1,
  };
  return <div style={flexed}>{children}</div>;
};

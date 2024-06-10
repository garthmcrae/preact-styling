import { ReactNode } from "react";

export const FlexItem = ({ children }: { children: ReactNode }) => {
  const flexItem = {
    flexBasis: 0,
    flexGrow: 1,
    flexShrink: 0,
  };
  return <div style={flexItem}>{children}</div>;
};

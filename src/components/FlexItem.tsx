import { ReactNode } from "react";

const flexItem = {
  flexBasis: 0,
  flexGrow: 1,
  flexShrink: 0,
};

export const FlexItem = ({ children }: { children: ReactNode }) => {
  return <div style={flexItem}>{children}</div>;
};

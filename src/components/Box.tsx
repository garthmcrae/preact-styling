import { CSSProperties, ReactNode } from "react";

export const Box = ({ children }: { children: ReactNode }) => {
  const box: CSSProperties = {
    padding: 16,
  };

  return <div style={box}>{children}</div>;
};

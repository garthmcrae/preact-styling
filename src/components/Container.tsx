import { CSSProperties, ReactNode } from "react";

export const Container = ({ children }: { children: ReactNode }) => {
  const container: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: 960,
  };

  return <div style={container}>{children}</div>;
};

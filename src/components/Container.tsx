import { CSSProperties, ReactNode } from "react";

const container: CSSProperties = {
  boxSizing: "border-box",
  maxWidth: 960,
};

export const Container = ({ children }: { children: ReactNode }) => {
  return <div style={container}>{children}</div>;
};

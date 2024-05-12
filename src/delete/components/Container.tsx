import { ComponentChildren } from "preact";
import { CSSProperties } from "preact/compat";

export const Container = ({ children }: { children: ComponentChildren }) => {
  const container: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: 960,
    paddingRight: 60,
  };

  return <div style={container}>{children}</div>;
};

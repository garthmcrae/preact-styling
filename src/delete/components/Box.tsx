import type { ComponentChildren } from "preact";
import { CSSProperties } from "preact/compat";

export function Box({ children }: { children: ComponentChildren }) {
  const boxStyles: CSSProperties = {
    padding: 16,
  };

  return <div style={boxStyles}>{children}</div>;
}

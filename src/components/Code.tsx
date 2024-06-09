import { CSSProperties } from "react";

export const Code = ({ children }: { children: string }) => {
  const code: CSSProperties = {
    backgroundColor: "rgba(255,255,255,.1)",
    boxSizing: "border-box",
    color: "currentColor",
    lineHeight: 1.25,
    margin: 0,
    overflowX: "auto",
    padding: 16,
  };
  return (
    <pre style={code}>
      <code>{children.trim()}</code>
    </pre>
  );
};

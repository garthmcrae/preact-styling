import { CSSProperties } from "react";

const outline: CSSProperties = {
  outlineColor: "inherit",
  outlineOffset: -2,
  outlineStyle: "solid",
  outlineWidth: 2,
};

export const Void = () => {
  const container: CSSProperties = {
    height: 200,
    ...outline,
    width: 200,
  };
  return <section style={container} />;
};

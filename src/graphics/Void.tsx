import { CSSProperties } from "preact/compat";

export const Void = () => {
  const container: CSSProperties = {
    backgroundImage: "linear-gradient(60deg,crimson,tomato)",
    height: 200,
    width: "100%",
  };
  return <section style={container} />;
};

import { CSSProperties } from "preact/compat";

export const Void = () => {
  const container: CSSProperties = {
    backgroundImage: "radial-gradient(tomato,crimson)",
    height: 200,
    width: "100%",
  };
  return <section style={container} />;
};

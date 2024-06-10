import { CSSProperties } from "preact/compat";

export const Plane = () => {
  const container: CSSProperties = {
    alignItems: "center",
    backgroundImage: "radial-gradient(yellow,orange)",
    display: "flex",
    height: 200,
    justifyContent: "center",
    perspective: 550,
    width: "100%",
  };
  const element: CSSProperties = {
    animationName: "rotate",
    animationDuration: "10000ms",
    animationFillMode: "both",
    animationIterationCount: "infinite",
    animationTimingFunction: "linear",
    height: 100,
    transform: "rotate3d(0, 1, 0, 0deg)",
    transformStyle: "preserve-3d",
    width: 100,
  };
  const plane: CSSProperties = {
    backfaceVisibility: "inherit",
    backgroundColor: "rgba(255,0,0,.255)",
    height: "100%",
    position: "absolute",
    width: "100%",
  };
  return (
    <section style={container}>
      <div style={element}>
        <div style={plane} />
      </div>
    </section>
  );
};

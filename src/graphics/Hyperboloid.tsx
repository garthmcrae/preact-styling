import { CSSProperties } from "preact/compat";

export const Hyperboloid = () => {
  const container: CSSProperties = {
    alignItems: "center",
    backgroundImage: "radial-gradient(blue,navy)",
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
    backgroundColor: "rgba(255,0,255,.255)",
    height: "100%",
    position: "absolute",
    width: "100%",
  };
  return (
    <section style={container}>
      <div style={element}>
        {[-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50].map((position) => (
          <div
            key={position}
            style={{
              ...plane,
              transform: `scale(${
                1 * (position / 50) * -1
              }) translateZ(${position}px)`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

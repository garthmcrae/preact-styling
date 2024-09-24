import { CSSProperties } from "react";

const outline: CSSProperties = {
  outlineColor: "inherit",
  outlineOffset: -2,
  outlineStyle: "solid",
  outlineWidth: 2,
};

export const Pyramid = () => {
  const container: CSSProperties = {
    alignItems: "center",
    display: "flex",
    height: 200,
    justifyContent: "center",
    ...outline,
    perspective: 550,
    width: 200,
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
    height: "100%",
    ...outline,
    position: "absolute",
    width: "100%",
  };
  return (
    <section style={container}>
      <div style={element}>
        {[-70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30].map(
          (position, index) => (
            <div
              key={position}
              style={{
                ...plane,
                transform: `scale(${index / 10}) translateZ(${position}px)`,
              }}
            />
          )
        )}
      </div>
    </section>
  );
};

import { CSSProperties } from "react";
import { border } from "../styles";

const container: CSSProperties = {
  alignItems: "center",
  ...border,
  display: "flex",
  height: 220,
  justifyContent: "center",
  perspective: 220,
  width: 220,
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
  ...border,
  position: "absolute",
};

export const Void = () => {
  return (
    <section style={container}>
      <div style={element}>
        {[-50, 50].map((position) => (
          <div
            key={position}
            style={{
              ...plane,
              height: "100%",
              transform: `translateZ(${position}px)`,
              width: "100%",
            }}
          />
        ))}
      </div>
    </section>
  );
};

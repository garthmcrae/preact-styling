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
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
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

export const Pyramid = () => {
  return (
    <section style={container}>
      <div style={element}>
        {[-50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50].map((position) => {
          const size = `${
            position < 0 ? 50 - Math.abs(position) : 50 + position
          }%`;
          console.log(position, size);
          return (
            <div
              key={position}
              style={{
                ...plane,
                height: size,
                transform: `translateZ(${position - 20}px)`,
                width: size,
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

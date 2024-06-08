import { CSSProperties } from "preact/compat";

export const DimensionalObject = () => {
  const container: CSSProperties = {
    alignItems: "center",
    aspectRatio: "1 / 1",
    backgroundImage: "radial-gradient(coral,crimson)",
    display: "flex",
    height: 200,
    justifyContent: "center",
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
    alignItems: "center",
    backfaceVisibility: "inherit",
    backgroundColor: "rgba(255,255,0,.255)",
    color: "#fff",
    display: "flex",
    fontSize: 50,
    height: "100%",
    justifyContent: "center",
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
              transform: `translateZ(${position}px)`,
            }}
          >
            {/* {position} */}
          </div>
        ))}
      </div>
    </section>
  );
};

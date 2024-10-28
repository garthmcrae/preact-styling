import { CSSProperties } from "react";
import { border } from "../styles";

const slice: CSSProperties = {
  backfaceVisibility: "inherit",
  ...border,
  boxSizing: "border-box",
  position: "absolute",
};

export const ObjectSlice = ({ style }: { style: CSSProperties }) => {
  return (
    <div
      style={{
        ...slice,
        ...style,
      }}
    />
  );
};

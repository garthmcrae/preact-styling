import { CSSProperties } from "react";

export const breakpoint = 960;

export const borderWidth = 2;
export const borderRadius = 0;

export const border: CSSProperties = {
  borderColor: "currentcolor",
  borderRadius,
  borderStyle: "solid",
  borderWidth,
};

export const fadeInUp: CSSProperties = {
  animationName: "fade-in-up",
  animationDuration: "400ms",
  animationFillMode: "both",
};

export const padding = {
  paddingBottom: 8 - borderWidth,
  paddingLeft: 8 - borderWidth,
  paddingRight: 8 - borderWidth,
  paddingTop: 8 - borderWidth,
}

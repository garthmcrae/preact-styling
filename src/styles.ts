import { CSSProperties } from "react";

export const border: CSSProperties = {
    borderColor: "currentcolor",
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: 2,
};

export const fadeInUp: CSSProperties = {
    animationName: "fade-in-up",
    animationDuration: "600ms",
    animationFillMode: "both",
};

export const padding = {
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 6,
}

export const button: CSSProperties = {
    appearance: 'none',
    backgroundColor: "var(--background-color)",
    ...border,
    boxSizing: "border-box",
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 32,
    lineHeight: 1,
    minWidth: 48,
    ...padding,
    textAlign: "center",
    transition: "background-color 2000ms ease-in-out",
};

export const link: CSSProperties = {
    ...border,
    boxSizing: "border-box",
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 32,
    lineHeight: 1,
    ...padding,
    textDecoration: "none",
};



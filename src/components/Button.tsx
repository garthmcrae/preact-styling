import {
  CSSProperties,
  forwardRef,
  MouseEvent,
  ReactNode,
  Ref,
  TouchEvent,
} from "react";
import { border, padding } from "../styles";

const button: CSSProperties = {
  appearance: "none",
  backgroundColor: "var(--background-color)",
  ...border,
  boxSizing: "border-box",
  color: "inherit",
  cursor: "pointer",
  display: "block",
  fontFamily: "inherit",
  fontSize: 32,
  lineHeight: 1,
  ...padding,
  textAlign: "center",
  transition: "background-color 100ms ease-in-out",
};

export const Button = forwardRef(
  (
    {
      children,
      onClick,
      type = "button",
    }: {
      children: ReactNode;
      onClick?: (event: MouseEvent | TouchEvent) => void;
      type?: "button" | "submit";
    },
    ref
  ) => {
    return (
      <button
        style={button}
        aria-label="toggle"
        onClick={onClick}
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
      >
        {children}
      </button>
    );
  }
);

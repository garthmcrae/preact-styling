import { CSSProperties, forwardRef, ReactNode, Ref } from "react";
import { border, padding } from "../styles";

export const Button = forwardRef(
  (
    {
      children,
      onClick,
      type = "button",
    }: {
      children: ReactNode;
      onClick?: (event: MouseEvent) => void;
      type?: "button" | "submit";
    },
    ref
  ) => {
    const button: CSSProperties = {
      appearance: "none",
      backgroundColor: "var(--background-color)",
      ...border,
      boxSizing: "border-box",
      color: "inherit",
      cursor: "pointer",
      display: "block",
      fontSize: 32,
      lineHeight: 1,
      ...padding,
      textAlign: "center",
      transition: "background-color 2000ms ease-in-out",
    };
    return (
      <button
        style={button}
        aria-label="Toggle"
        onClick={onClick}
        ref={ref as Ref<HTMLButtonElement>}
        type={type}
      >
        {children}
      </button>
    );
  }
);

import { CSSProperties, ReactNode } from "react";
import { border } from "../styles";

export const ExpandButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  const button: CSSProperties = {
    backgroundColor: "var(--background-color)",
    ...border,
    borderWidth: 2,
    boxSizing: "border-box",
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 32,
    lineHeight: 1,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    textAlign: "left",
    transition:
      "background-color 2000ms ease-in-out, padding 100ms ease-in-out",
    width: "100%",
  };
  return (
    <button style={button} aria-label="Toggle expand" onClick={onClick}>
      {children}
    </button>
  );
};

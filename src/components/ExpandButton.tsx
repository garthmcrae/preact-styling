import { CSSProperties, ReactNode } from "react";

export const ExpandButton = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick: () => void;
}) => {
  const button: CSSProperties = {
    backgroundColor: "var(--background-color)",
    borderColor: "currentcolor",
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: 1,
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 16,
    lineHeight: 1,
    minWidth: 28,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    textDecoration: "none",
    transition:
      "background-color 2000ms ease-in-out, padding 100ms ease-in-out",
    width: "max-content",
  };
  return (
    <button style={button} aria-label="Toggle expand" onClick={onClick}>
      {children}
    </button>
  );
};

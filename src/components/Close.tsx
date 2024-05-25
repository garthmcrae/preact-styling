import { CSSProperties } from "react";
import { Icon } from "./Icon";
import { border } from "../styles";

export function Close({
  "aria-label": ariaLabel,
  onClick,
}: {
  "aria-label": string;
  onClick?: () => void;
}) {
  const close: CSSProperties = {
    appearance: "none",
    backgroundColor: "var(--background-color)",
    ...border,
    color: "inherit",
    cursor: "pointer",
    display: "block",
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingTop: 0,
    transition:
      "background-color 2000ms ease-in-out, padding 100ms ease-in-out",
  };
  return (
    <button style={close} aria-label={ariaLabel} onClick={onClick}>
      <Icon
        path="close"
        style={{
          display: "block",
          height: 24,
          width: 24,
        }}
      />
    </button>
  );
}

import { CSSProperties } from "react";
import { Icon, cross } from "./Icon";
import { border } from "../styles";

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
  transition: "background-color 100ms ease-in-out, padding 100ms ease-in-out",
};

export function Close({
  "aria-label": ariaLabel,
  onClick,
}: {
  "aria-label": string;
  onClick?: () => void;
}) {
  return (
    <button style={close} aria-label={ariaLabel} onClick={onClick}>
      <Icon
        d={cross}
        style={{
          display: "block",
          height: 24,
          width: 24,
        }}
      />
    </button>
  );
}

import { CSSProperties } from "preact/compat";

export const ExpandButton = ({
  expand,
  onClick,
}: {
  expand: boolean;
  onClick: () => void;
}) => {
  const border: CSSProperties = {
    borderColor: "currentcolor",
    borderRadius: 0,
    borderStyle: "solid",
  };
  const button: CSSProperties = {
    backgroundColor: "var(--background-color)",
    ...border,
    borderWidth: 2,
    boxSizing: "border-box",
    color: "inherit",
    display: "block",
    paddingBottom: expand ? 9 : 19,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: expand ? 9 : 19,
    transition:
      "background-color 2000ms ease-in-out, padding 100ms ease-in-out",
    width: "100%",
  };
  const span: CSSProperties = {
    ...border,
    borderWidth: 1,
    display: "block",
    width: 32,
  };
  return (
    <button style={button} aria-label="Toggle expand" onClick={onClick}>
      <span style={span} />
    </button>
  );
};

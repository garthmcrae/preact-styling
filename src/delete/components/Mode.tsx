import { CSSProperties, useState } from "preact/compat";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Mode = () => {
  const innerWidth = useWindowInnerWidth();
  const [mode, setMode] = useState("dark");
  const border: CSSProperties = {
    borderColor: "currentcolor",
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: 2,
  };
  const button: CSSProperties = {
    backgroundColor: "var(--background-color)",
    ...border,
    boxSizing: "border-box",
    color: "inherit",
    display: "block",
    fontSize: 32,
    lineHeight: 1,
    minWidth: 66,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    textAlign: "center",
    textDecoration: "none",
    transition: "background-color 2000ms ease-in-out",
  };
  const control = atMediaMinWidth(
    {
      0: {
        backgroundColor: "var(--background-color)",
        ...border,
        marginLeft: 16,
        padding: 16,
        position: "static",
        transition: "background-color 2000ms ease-in-out",
        width: 240,
      },
      960: {
        bottom: 16,
        left: "calc(100vw - 16px)",
        marginLeft: undefined,
        position: "fixed",
        transform: "rotate(-90deg)",
        transformOrigin: "bottom left",
      },
    },
    innerWidth
  );
  const label: CSSProperties = {
    fontSize: 12,
    marginBottom: 16,
    marginTop: 0,
  };

  const handleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.style.setProperty("--color", "#242427");
      document.documentElement.style.setProperty(
        "--background-color",
        "#d4d4d4"
      );
    } else {
      setMode("dark");
      document.documentElement.style.setProperty("--color", "#d4d4d4");
      document.documentElement.style.setProperty(
        "--background-color",
        "#242427"
      );
    }
  };

  return (
    <div style={control}>
      <h2 style={label}>Modes</h2>
      <button style={button} aria-label="Toggle" onClick={handleMode}>
        Light and dark
      </button>
    </div>
  );
};

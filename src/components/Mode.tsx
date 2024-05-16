import { CSSProperties, useState } from "react";
import { border, button, label, listReset } from "../styles";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Mode = () => {
  const innerWidth = useWindowInnerWidth();
  const [mode, setMode] = useState("dark");
  const control = atMediaMinWidth(
    {
      0: {
        backgroundColor: "var(--background-color)",
        ...border,
        marginLeft: 16,
        padding: 16,
        position: "static",
        transition: "background-color 2000ms ease-in-out",
        width: "max-content",
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
  const list: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    ...listReset,
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
      <ul style={list}>
        <li>
          <button style={button} aria-label="Toggle" onClick={handleMode}>
            light
          </button>
        </li>
        <li>
          <button style={button} aria-label="Toggle" onClick={handleMode}>
            dark
          </button>
        </li>
      </ul>
    </div>
  );
};

import { CSSProperties, useEffect, useState } from "react";
import { border, button, label, listReset } from "../styles";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Mode = () => {
  const innerWidth = useWindowInnerWidth();
  const [mode, setMode] = useState("low");
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
      1096: {
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
  useEffect(() => {
    if (mode === "dark") {
      setMode("dark");
      document.documentElement.style.setProperty("--color", "#d4d4d4");
      document.documentElement.style.setProperty(
        "--background-color",
        "#242427"
      );
    }
    if (mode === "light") {
      setMode("light");
      document.documentElement.style.setProperty("--color", "#242427");
      document.documentElement.style.setProperty(
        "--background-color",
        "#d4d4d4"
      );
    }
    if (mode === "low") {
      setMode("low");
      document.documentElement.style.setProperty("--color", "#848487");
      document.documentElement.style.setProperty(
        "--background-color",
        "#242427"
      );
    }
  }, [mode]);
  return (
    <div style={control}>
      <h2 style={label}>Modes</h2>
      <ul style={list}>
        <li>
          <button
            style={button}
            aria-label="Toggle"
            onClick={() => setMode("dark")}
          >
            dark
          </button>
        </li>
        <li>
          <button
            style={button}
            aria-label="Toggle"
            onClick={() => setMode("light")}
          >
            light
          </button>
        </li>
        <li>
          <button
            style={button}
            aria-label="Toggle"
            onClick={() => setMode("low")}
          >
            low
          </button>
        </li>
      </ul>
    </div>
  );
};

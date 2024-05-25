import { CSSProperties, useEffect, useState } from "react";
import { Button } from "./Button";
import { Label } from "./Label";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";
import { border, breakpoint } from "../styles";

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
      [breakpoint]: {
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
    listStyle: "none",
    marginBottom: 0,
    marginTop: 12,
    paddingInlineStart: 0,
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
  }, [mode]);
  return (
    <div style={control}>
      <Label>Modes</Label>
      <ul style={list}>
        <li>
          <Button aria-label="Toggle" onClick={() => setMode("dark")}>
            dark
          </Button>
        </li>
        <li>
          <Button aria-label="Toggle" onClick={() => setMode("light")}>
            light
          </Button>
        </li>
      </ul>
    </div>
  );
};

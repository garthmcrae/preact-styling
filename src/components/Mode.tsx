import { CSSProperties, useEffect, useState } from "react";
import { Button } from "./Button";
import { Label } from "./Label";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";
import { border, breakpoint, padding } from "../styles";

export const Mode = () => {
  const innerWidth = useWindowInnerWidth();
  const [mode, setMode] = useState("low");
  const container: CSSProperties = {
    backgroundColor: "var(--background-color)",
    ...border,
    padding: 16,
    transition: "background-color 200ms ease-in-out",
    width: "max-content",
  };
  const control = atMediaMinWidth(
    {
      0: {
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
      },
      [breakpoint + 120]: {
        bottom: 0,
        left: "100vw",
        paddingBottom: 16,
        paddingTop: 16,
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
    marginTop: 0,
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
      <div style={container}>
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
    </div>
  );
};

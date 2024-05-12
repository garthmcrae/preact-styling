import { CSSProperties, useEffect, useState } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Sidebar = ({ children }: { children: string[] }) => {
  const [toggle, setToggle] = useState(false);
  const innerWidth = useWindowInnerWidth();
  const border: CSSProperties = {
    borderColor: "currentcolor",
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: 2,
  };
  const button: CSSProperties = {
    backgroundColor: "var(--background-color)",
    ...border,
    color: "inherit",
    display: "block",
    fontSize: 32,
    lineHeight: 1,
    minWidth: 44,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    position: "absolute",
    right: "calc(100% + 18px)",
    textAlign: "center",
    textDecoration: "none",
    top: 24,
    transition: "background-color 2000ms ease-in-out",
  };
  const label: CSSProperties = {
    fontSize: 12,
    marginBottom: 16,
    marginTop: 0,
  };
  const link: CSSProperties = {
    ...border,
    color: "inherit",
    display: "block",
    fontSize: 32,
    lineHeight: 1,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    textDecoration: "none",
  };
  const list: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    listStyle: "none",
    margin: 0,
    padding: 0,
  };
  const nav = atMediaMinWidth(
    {
      0: {
        backgroundColor: "var(--background-color)",
        ...border,
        left: "100%",
        padding: 16,
        position: "fixed",
        top: 18,
        transform: `translateX(${toggle ? -292 : 0}px)`,
        transition:
          "background-color 2000ms ease-in-out, transform 300ms ease-in-out",
        width: 240,
      },
      960: {
        left: 960,
      },
    },
    innerWidth
  );

  const handleToggle = () => setToggle((prevToggle) => !prevToggle);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.code === "Backslash") {
        handleToggle();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <nav style={nav} aria-describedby="nav-sidebar">
      <button style={button} aria-label="Toggle" onClick={handleToggle}>
        |
      </button>
      <h2 style={label} id="nav-sidebar">
        Page navigation
      </h2>
      <ul style={list}>
        {children.map((child) => (
          <li key={child}>
            <a style={link} href={`#${child}`}>
              #{child}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

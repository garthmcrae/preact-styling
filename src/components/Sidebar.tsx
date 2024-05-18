import { CSSProperties, useEffect, useState } from "react";
import { border, button, hash, label, link, listReset } from "../styles";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Sidebar = ({ children }: { children: string[] }) => {
  const [toggle, setToggle] = useState(false);
  const innerWidth = useWindowInnerWidth();
  const control: CSSProperties = {
    ...button,
    position: "absolute",
    right: "calc(100% + 16px)",
    top: 160,
    transition: "background-color 2000ms ease-in-out",
  };
  const list: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    ...listReset,
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
      <button style={control} aria-label="Toggle" onClick={handleToggle}>
        |
      </button>
      <h2 style={label} id="nav-sidebar">
        Page navigation
      </h2>
      <ul style={list}>
        {children.map((child) => (
          <li key={child}>
            <a style={link} href={`#${child}`}>
              <span style={hash}>#</span>
              {child}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

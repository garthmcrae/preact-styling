import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { Icon, lunch } from "./Icon";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { border } from "../styles";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

const container: CSSProperties = {
  position: "relative",
};
const control: CSSProperties = {
  appearance: "none",
  backgroundColor: "var(--background-color)",
  ...border,
  color: "inherit",
  cursor: "pointer",
  paddingBottom: 14,
  paddingLeft: 14,
  paddingRight: 14,
  paddingTop: 14,
  textDecoration: "none",
  transition: "background-color 100ms ease-in-out, padding 100ms ease-in-out",
  width: "max-content",
};
const drawer: CSSProperties = {
  backgroundColor: "var(--background-color)",
  ...border,
  padding: 14,
  position: "absolute",
  right: -1 * (256 + 16),
  top: -4,
  transition: "background-color 100ms ease-in-out, transform 300ms ease-in-out",
  width: 224,
  zIndex: 2,
};

export const Drawer = ({ children }: { children: ReactNode }) => {
  const windowInnerWidth = useWindowInnerWidth();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prevToggle) => !prevToggle);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setToggle(false));
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (window.innerWidth > 1232) return;
      if (event.code === "Equal") {
        handleToggle();
      }
      if (event.code === "Escape") {
        setToggle(false);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  return (
    <div style={container}>
      <button
        aria-label="Toggle navigation"
        onClick={handleToggle}
        style={{
          ...control,
          display: windowInnerWidth <= 1232 ? "block" : "none",
        }}
      >
        <Icon
          d={lunch}
          style={{
            height: 24,
            width: 24,
          }}
        />
      </button>
      <div
        onClick={() => setToggle(false)}
        ref={ref}
        style={{ ...drawer, transform: `translateX(${toggle ? -268 : 0}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

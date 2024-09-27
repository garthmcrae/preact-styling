import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { Icon, lunch } from "./Icon";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { border } from "../styles";

const container: CSSProperties = {
  position: "relative",
};
const control: CSSProperties = {
  appearance: "none",
  backgroundColor: "var(--background-color)",
  ...border,
  color: "inherit",
  cursor: "pointer",
  display: "block",
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
  left: 56 + 16 + 4,
  padding: 14,
  position: "absolute",
  top: -4,
  transition: "background-color 100ms ease-in-out, transform 300ms ease-in-out",
  width: 224,
  zIndex: 2,
};

export const Drawer = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  useOnClickOutside(ref, () => setToggle(false));
  const handleToggle = () => setToggle((prevToggle) => !prevToggle);
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
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
        style={control}
      >
        <Icon
          d={lunch}
          style={{
            display: "block",
            height: 24,
            width: 24,
          }}
        />
      </button>
      <div
        onClick={() => setToggle(false)}
        ref={ref}
        style={{ ...drawer, transform: `translateX(${toggle ? -272 : 0}px)` }}
      >
        {children}
      </div>
    </div>
  );
};

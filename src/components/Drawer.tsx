import { ReactNode, useEffect, useRef, useState } from "react";
import { Icon } from "./Icon";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { border, breakpoint } from "../styles";

export const Drawer = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  useOnClickOutside(ref, () => setToggle(false));
  const innerWidth = useWindowInnerWidth();
  const control = atMediaMinWidth(
    {
      0: {
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
        transition:
          "background-color 200ms ease-in-out, padding 100ms ease-in-out",
        width: "max-content",
      },
      [breakpoint]: {
        display: "none",
      },
    },
    innerWidth
  );
  const drawer = atMediaMinWidth(
    {
      0: {
        backgroundColor: "var(--background-color)",
        ...border,
        left: -256,
        padding: 14,
        position: "absolute",
        top: 16,
        transform: `translateX(${toggle ? 272 : 0}px)`,
        transition:
          "background-color 200ms ease-in-out, transform 300ms ease-in-out",
        width: 224,
        zIndex: 2,
      },
      [breakpoint]: {
        borderWidth: 0,
        padding: 0,
        position: "static",
        transform: "translateX(0)",
        transition: "background-color 200ms ease-in-out",
        width: "unset",
      },
    },
    innerWidth
  );
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
    <>
      <button
        aria-label="Toggle navigation"
        onClick={handleToggle}
        ref={ref}
        style={control}
      >
        <Icon
          path="lunch"
          style={{
            display: "block",
            height: 24,
            width: 24,
          }}
        />
      </button>
      <div style={drawer}>{children}</div>
    </>
  );
};

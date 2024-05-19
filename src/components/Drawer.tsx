import { ReactNode, useEffect, useState } from "react";
import { border, button } from "../styles";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Drawer = ({ children }: { children: ReactNode }) => {
  const [toggle, setToggle] = useState(false);
  const innerWidth = useWindowInnerWidth();
  const control = atMediaMinWidth(
    {
      0: {
        ...button,
        transform: `translateX(${toggle ? 292 : 0}px)`,
        transition:
          "background-color 2000ms ease-in-out, transform 300ms ease-in-out",
      },
      800: {
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
        left: -292,
        padding: 16,
        position: "absolute",
        top: 16,
        transform: `translateX(${toggle ? 292 : 0}px)`,
        transition:
          "background-color 2000ms ease-in-out, transform 300ms ease-in-out",
        width: 240,
      },
      800: {
        borderWidth: 0,
        padding: 0,
        position: "static",
        transform: "translateX(0)",
        transition: "background-color 2000ms ease-in-out",
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
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <>
      <button
        style={control}
        aria-label="Toggle navigation"
        onClick={handleToggle}
      >
        <span style={{ transform: "translateY(0.125em)" }}>=</span>
      </button>
      <div style={drawer}>{children}</div>
    </>
  );
};

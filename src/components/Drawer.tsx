import { CSSProperties, ReactNode, useEffect, useRef, useState } from "react";
import { border, button } from "../styles";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useOnClickOutside } from "../hooks/useClickOutside";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Drawer = ({ children }: { children: ReactNode }) => {
  const ref = useRef(null);
  const [toggle, setToggle] = useState(false);
  useOnClickOutside(ref, () => setToggle(false));
  const innerWidth = useWindowInnerWidth();
  const burger: CSSProperties = {
    borderBottomStyle: "solid",
    borderBottomWidth: 2,
    borderTopStyle: "solid",
    borderTopWidth: 2,
    display: "block",
    height: 12,
    marginBottom: 5,
    marginTop: 11,
    width: 24,
  };
  const control = atMediaMinWidth(
    {
      0: {
        ...button,
        transform: `translateX(${toggle ? 272 : 0}px)`,
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
        left: -256,
        padding: 14,
        position: "absolute",
        top: 16,
        transform: `translateX(${toggle ? 272 : 0}px)`,
        transition:
          "background-color 2000ms ease-in-out, transform 300ms ease-in-out",
        width: 224,
        zIndex: 2,
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
        aria-label="Toggle navigation"
        onClick={handleToggle}
        ref={ref}
        style={control}
      >
        <span style={burger} />
      </button>
      <div style={drawer}>{children}</div>
    </>
  );
};

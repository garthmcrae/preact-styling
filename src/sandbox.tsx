import { CSSProperties, ReactNode, useEffect, useState } from "react";
import { breakpoint } from "./styles";

export const atMediaMinWidth = (
  object: { [key: number]: CSSProperties },
  width: number
) =>
  Object.keys(object)
    .filter((key) => +key <= width)
    .reduce((result, key) => ({ ...result, ...object[+key] }), {});

export const HeadingPage = ({ children }: { children: ReactNode }) => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const headingPage = atMediaMinWidth(
    {
      0: {
        fontSize: 48,
        lineHeight: 1,
        marginBottom: ".2em",
        marginTop: "0",
      },
      [breakpoint]: {
        fontSize: 96,
      },
    },
    innerWidth
  );

  return <h1 style={headingPage}>{children}</h1>;
};

import { ReactNode } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";
import { breakpoint } from "../styles";

export const Heading = ({
  children,
  element = "h2",
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const innerWidth = useWindowInnerWidth();
  const Element = element;
  const heading = atMediaMinWidth(
    {
      0: {
        fontSize: 32,
        lineHeight: 1,
        margin: 0,
      },
      [breakpoint]: {
        fontSize: 64,
      },
    },
    innerWidth
  );
  return <Element style={heading}>{children}</Element>;
};

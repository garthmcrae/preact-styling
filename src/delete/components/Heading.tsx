import { ReactNode } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Heading = ({
  children,
  element = "h1",
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const innerWidth = useWindowInnerWidth();
  const Element = element;
  const heading = atMediaMinWidth(
    {
      0: {
        fontSize: 64,
        lineHeight: 1,
        margin: 0,
      },
      960: {
        fontSize: 128,
      },
    },
    innerWidth
  );

  return <Element style={headingStyles}>{children}</Element>;
};

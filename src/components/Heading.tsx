import { ReactNode } from "react";
import { breakpoint } from "../styles";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";

export const Heading = ({
  children,
  element = "h2",
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  const Element = element;
  const heading = useAtMediaMinWidth({
    0: {
      fontSize: 32,
      lineHeight: 1,
      margin: 0,
    },
    [breakpoint]: {
      fontSize: 64,
    },
  });
  return <Element style={heading}>{children}</Element>;
};

import { ReactNode } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const HeadingPage = ({ children }: { children: ReactNode }) => {
  const innerWidth = useWindowInnerWidth();
  const headingPage = atMediaMinWidth(
    {
      0: {
        fontSize: 48,
        lineHeight: 1,
        marginBottom: ".2em",
        marginTop: "0",
      },
      960: {
        fontSize: 96,
      },
    },
    innerWidth
  );

  return <h1 style={headingPage}>{children}</h1>;
};

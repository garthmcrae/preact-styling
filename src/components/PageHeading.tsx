import { ReactNode } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const PageHeading = ({ children }: { children: ReactNode }) => {
  const innerWidth = useWindowInnerWidth();
  const pageHeadingStyles = atMediaMinWidth(
    {
      0: {
        fontSize: "24vw",
        lineHeight: 1,
        marginBottom: ".2em",
        marginTop: "0",
        whiteSpace: "nowrap",
      },
      960: {
        fontSize: 230,
      },
    },
    innerWidth
  );

  return <h1 style={pageHeadingStyles}>{children}</h1>;
};

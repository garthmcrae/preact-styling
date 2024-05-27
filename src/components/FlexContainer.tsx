import { ReactNode } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";
import { breakpoint as defaultBreakpoint } from "../styles";

export const FlexContainer = ({
  breakpoint = defaultBreakpoint,
  children,
}: {
  breakpoint?: number;
  children: ReactNode;
}) => {
  const innerWidth = useWindowInnerWidth();
  const flexer = atMediaMinWidth(
    {
      0: {
        display: "flex",
        flexDirection: "column",
        gap: 32,
        alignItems: "stretch",
      },
      [breakpoint]: {
        flexDirection: "row",
      },
    },
    innerWidth
  );

  return <div style={flexer}>{children}</div>;
};

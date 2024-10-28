import { ReactNode } from "react";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";
import { breakpoint as defaultBreakpoint } from "../styles";

export const FlexContainer = ({
  breakpoint = defaultBreakpoint,
  children,
}: {
  breakpoint?: number;
  children: ReactNode;
}) => {
  const flexContainer = useAtMediaMinWidth({
    0: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      alignItems: "stretch",
    },
    [breakpoint]: {
      flexDirection: "row",
    },
  });

  return <div style={flexContainer}>{children}</div>;
};

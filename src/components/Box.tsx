import { ReactNode } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";

export const Box = ({ children }: { children: ReactNode }) => {
  const innerWidth = useWindowInnerWidth();
  const box = atMediaMinWidth(
    {
      0: {
        paddingBottom: 8,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 8,
      },
      960: {
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
      },
    },
    innerWidth
  );

  return <div style={box}>{children}</div>;
};

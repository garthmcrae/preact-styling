import { ReactNode } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";
import { breakpoint } from "../styles";

export const Paragraph = ({
  children,
  first,
  last,
}: {
  children: ReactNode;
  first?: boolean;
  last?: boolean;
}) => {
  const innerWidth = useWindowInnerWidth();
  const paragraph = atMediaMinWidth(
    {
      0: {
        fontSize: 20,
        lineHeight: 1.25,
        marginBottom: last ? 0 : 16,
        marginTop: first ? 0 : 16,
      },
      [breakpoint]: {
        fontSize: 32,
      },
    },
    innerWidth
  );

  return <p style={paragraph}>{children}</p>;
};

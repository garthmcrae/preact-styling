import { ReactNode } from "react";
import { breakpoint } from "../styles";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";

export const Paragraph = ({
  children,
  first,
  last,
}: {
  children: ReactNode;
  first?: boolean;
  last?: boolean;
}) => {
  const paragraph = useAtMediaMinWidth({
    0: {
      fontSize: 20,
      lineHeight: 1.25,
      marginBottom: last ? 0 : 16,
      marginTop: first ? 0 : 16,
    },
    [breakpoint]: {
      fontSize: 24,
    },
  });
  return <p style={paragraph}>{children}</p>;
};

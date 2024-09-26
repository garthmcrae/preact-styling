import { ReactNode } from "react";
import { useAtMediaMinWidth } from "../hooks/useAtMediaMinWidth";
import { breakpoint } from "../styles";

export const PageHeading = ({ children }: { children: ReactNode }) => {
  const pageHeading = useAtMediaMinWidth({
    0: {
      fontSize: 48,
      lineHeight: 1,
      marginBottom: ".2em",
      marginTop: "0",
    },
    [breakpoint]: {
      fontSize: 96,
    },
  });
  return <h1 style={pageHeading}>{children}</h1>;
};

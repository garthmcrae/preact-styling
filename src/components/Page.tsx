import { ReactNode, useEffect } from "react";
// import { fadeInUp } from "../styles";

export const Page = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  // return <div style={fadeInUp}>{children}</div>;
  return <div>{children}</div>;
};

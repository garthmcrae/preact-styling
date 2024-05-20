import { ReactNode } from "react";
import { fadeInUp } from "../styles";

export const Page = ({ children }: { children: ReactNode }) => {
  return <div style={fadeInUp}>{children}</div>;
};

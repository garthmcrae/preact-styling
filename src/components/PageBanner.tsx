import { ReactNode } from "react";

const pageBanner = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  height: "calc(100vh - 120px)",
  minHeight: 408,
};

export const PageBanner = ({ children }: { children: ReactNode }) => {
  return <div style={pageBanner}>{children}</div>;
};

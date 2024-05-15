import { CSSProperties, ReactNode } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ReactNode }) => {
  const layout: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    lineHeight: 1,
    minHeight: "100vh",
    overflowX: "hidden",
  };

  return (
    <div style={layout}>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
};

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
  };
  return (
    <div style={layout}>
      <Header />
      <main id="content">{children}</main>
      <Footer />
    </div>
  );
};

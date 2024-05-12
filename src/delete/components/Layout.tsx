import type { ComponentChildren } from "preact";
import { CSSProperties } from "preact/compat";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }: { children: ComponentChildren }) => {
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
      <main>{children}</main>
      <Footer />
    </div>
  );
};

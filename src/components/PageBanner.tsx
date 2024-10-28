import { CSSProperties, ReactNode } from "react";
import { Button } from "../components/Button";
import { Icon, down } from "../components/Icon";

const container: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  height: "calc(100vh - 224px)",
  minHeight: 408,
};
const content: CSSProperties = {
  alignItems: "center",
  display: "flex",
  flexGrow: 1,
  flexDirection: "column",
  justifyContent: "center",
};
const indicator: CSSProperties = {
  flexGrow: 0,
  flexShrink: 0,
  marginBottom: 16,
  marginLeft: "auto",
  marginRight: 16,
  marginTop: 16,
};

export const PageBanner = ({ children }: { children: ReactNode }) => {
  return (
    <div style={container}>
      <div style={content}>{children}</div>
      <div style={indicator}>
        <Button
          onClick={() => window.scrollBy({ top: 160, behavior: "smooth" })}
        >
          <Icon d={down} style={{ height: 24, width: 24 }} />
        </Button>
      </div>
    </div>
  );
};

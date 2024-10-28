import { ReactNode } from "react";

import { Control } from "../components/Control";

export function Cards({ children }: { children: ReactNode[] }) {
  return (
    <Control
      style={{
        0: { display: "flex", flexDirection: "column", gap: 16 },
        932: { flexDirection: "row" },
      }}
    >
      {children.map((card, index) => (
        <Control
          key={`article${index}`}
          style={{
            932: {
              flexBasis: "auto",
              flexGrow: 1,
              flexShrink: 1,
            },
          }}
        >
          {card}
        </Control>
      ))}
    </Control>
  );
}

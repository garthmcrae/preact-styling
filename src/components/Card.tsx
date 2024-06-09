import { CSSProperties, ReactNode } from "react";
import { border } from "../styles";

export const Card = ({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick: (argument: MouseEvent) => void;
}) => {
  const link: CSSProperties = {
    ...border,
    boxSizing: "border-box",
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 32,
    height: "100%",
    lineHeight: 1,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14,
    paddingTop: 14,
    position: "relative",
    textDecoration: "none",
  };
  const content: CSSProperties = {
    pointerEvents: "none",
  };
  return (
    <a style={link} href={href} onClick={(event) => onClick(event)}>
      <div style={content}>{children}</div>
    </a>
  );
};

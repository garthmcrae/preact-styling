import { CSSProperties, ReactNode } from "react";
import { border } from "../styles";
import { Icon } from "./Icon";

export const Card = ({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick: (argument: MouseEvent) => void;
}) => {
  const icon: CSSProperties = {
    height: 24,
    position: "absolute",
    right: 2,
    top: 2,
    width: 24,
  };
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
    paddingRight: 30,
    paddingTop: 14,
    position: "relative",
    textDecoration: "none",
  };
  const content: CSSProperties = {
    pointerEvents: "none",
  };
  return (
    <a style={link} href={href} onClick={(event) => onClick(event)}>
      <div style={content}>
        <div style={icon}>
          <Icon path="link" />
        </div>
        {children}
      </div>
    </a>
  );
};

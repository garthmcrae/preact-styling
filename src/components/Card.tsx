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
  onClick?: (argument: MouseEvent) => void;
}) => {
  const icon: CSSProperties = {
    height: 24,
    position: "absolute",
    right: 8,
    top: 4,
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
    padding: 16,
    position: "relative",
    textDecoration: "none",
  };
  return (
    <a style={link} href={href} onClick={onClick}>
      <div style={icon}>
        <Icon path="link" />
      </div>
      {children}
    </a>
  );
};

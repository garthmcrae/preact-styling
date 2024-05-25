import { CSSProperties, ReactNode } from "react";
import { border, padding } from "../styles";

export const Link = ({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick?: (argument: MouseEvent) => void;
}) => {
  const link: CSSProperties = {
    ...border,
    boxSizing: "border-box",
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 32,
    lineHeight: 1,
    ...padding,
    textDecoration: "none",
  };
  return (
    <a style={link} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

import { CSSProperties, MouseEvent, ReactNode } from "react";
import { border, padding } from "../styles";

export const Link = ({
  children,
  href,
  onClick = () => null,
}: {
  children: ReactNode;
  href: string;
  onClick?: (event: MouseEvent) => void;
}) => {
  const linkStyle: CSSProperties = {
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
    <a style={linkStyle} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

import { CSSProperties, MouseEvent, ReactNode } from "react";
import { border, padding } from "../styles";

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

export const Link = ({
  children,
  href,
  onClick = () => null,
}: {
  children: ReactNode;
  href: string;
  onClick?: (event: MouseEvent) => void;
}) => {
  return (
    <a style={link} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

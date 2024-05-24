import { ReactNode } from "react";
import { link } from "../styles";

export const Link = ({
  children,
  href,
  onClick,
}: {
  children: ReactNode;
  href: string;
  onClick?: (argument: MouseEvent) => void;
}) => {
  return (
    <a style={link} href={href} onClick={onClick}>
      {children}
    </a>
  );
};

import { ReactNode } from "react";
import { link } from "../styles";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Link = ({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) => {
  const goToPathname = useGoToPathname();

  return (
    <a style={link} href={pathname} onClick={goToPathname}>
      {children}
    </a>
  );
};

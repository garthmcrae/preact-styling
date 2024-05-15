import { CSSProperties, ReactNode } from "react";
import { useWindowLocationPathname } from "../hooks/useWindowLocationPathname";

export const Link = ({
  children,
  pathname,
}: {
  children: ReactNode;
  pathname: string;
}) => {
  const [, setState] = useWindowLocationPathname();
  const link: CSSProperties = {
    cursor: "pointer",
  };
  const handleClick = (argument: MouseEvent) => {
    const element = argument.target as HTMLAnchorElement;
    if (element.tagName === "A") {
      argument.preventDefault();
      const pathname = element.getAttribute("href");
      window.history.pushState({}, "", pathname);
      setState(pathname);
      return;
    }
    return;
  };

  return (
    <a style={link} href={pathname} onClick={handleClick}>
      {children}
    </a>
  );
};

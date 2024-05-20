import { ReactNode } from "react";
import { useWindowLocationPathname } from "../hooks/useWindowLocationPathname";

export const Route = ({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}) => {
  const { locationPathname } = useWindowLocationPathname();
  return <>{locationPathname === pathname ? children : null}</>;
};

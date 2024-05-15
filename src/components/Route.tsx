import { ReactNode } from "react";
import { useWindowLocationPathname } from "../hooks/useWindowLocationPathname";

export const Route = ({
  pathname,
  children,
}: {
  pathname: string;
  children: ReactNode;
}) => {
  const [state] = useWindowLocationPathname();
  return <>{state === pathname ? children : null}</>;
};

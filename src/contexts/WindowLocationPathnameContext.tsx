import { createContext, ReactNode, useEffect, useState } from "react";
import { formatPathname } from "../utilities/formatPathname";
export const WindowLocationPathnameContext = createContext<any>(null);

export const WindowLocationPathnameContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [locationPathname, setLocationPathname] = useState<string>(
    formatPathname(window.location.pathname)
  );
  useEffect(() => {
    const handlePushState = () => {
      setLocationPathname(window.location.pathname);
    };
    window.addEventListener("popstate", handlePushState);
    return () => {
      window.removeEventListener("popstate", handlePushState);
    };
  }, []);
  return (
    <WindowLocationPathnameContext.Provider
      value={[locationPathname, setLocationPathname]}
    >
      {children}
    </WindowLocationPathnameContext.Provider>
  );
};

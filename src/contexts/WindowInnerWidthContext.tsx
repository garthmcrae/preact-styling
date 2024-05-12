import { createContext, ReactNode, useEffect, useState } from "react";

export const WindowInnerWidthContext = createContext<number>(0);

export const WindowInnerWidthContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WindowInnerWidthContext.Provider value={innerWidth}>
      {children}
    </WindowInnerWidthContext.Provider>
  );
};

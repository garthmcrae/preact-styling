import { createContext, ReactNode, useLayoutEffect, useState } from "react";

export const WindowInnerWidthContext = createContext<number>(0);

export const WindowInnerWidthContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  useLayoutEffect(() => {
    let timeoutId: number | null | undefined = null;
    const handleResize = () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        setInnerWidth(window.innerWidth);
      }, 33.33); // 30 updates per second
    };
    window.addEventListener("resize", handleResize);
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <WindowInnerWidthContext.Provider value={innerWidth}>
      {children}
    </WindowInnerWidthContext.Provider>
  );
};

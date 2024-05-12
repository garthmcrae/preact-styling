import { useEffect, useState } from "preact/hooks";
import { ComponentChildren, createContext } from "preact";

export const WindowInnerWidthContext = createContext<number>(0);

export const WindowInnerWidthContextProvider = ({
  children,
}: {
  children: ComponentChildren;
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

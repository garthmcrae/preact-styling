import { CSSProperties } from "react";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { useWindowInnerWidth } from "./useWindowInnerWidth";

export const useAtMediaMinWidth = (
  object: { [key: number]: CSSProperties },
) => {
  const innerWidth = useWindowInnerWidth();
  return atMediaMinWidth(object,
    innerWidth
  );
} 
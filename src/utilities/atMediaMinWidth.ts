import { CSSProperties } from "react";

export const atMediaMinWidth = (
  object: { [key: number]: CSSProperties },
  width: number
) =>
  Object.keys(object)
    .filter((key) => +key <= width)
    .reduce((result, key) => ({ ...result, ...object[+key] }), {});

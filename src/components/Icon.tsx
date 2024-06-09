import { CSSProperties } from "preact/compat";

export const cross =
  "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z";
export const hash =
  "M20 10V8h-4V4h-2v4h-4V4H8v4H4v2h4v4H4v2h4v4h2v-4h4v4h2v-4h4v-2h-4v-4zm-6 4h-4v-4h4z";
export const lunch = "M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z";

export const Icon = ({ d, style }: { d: string; style: CSSProperties }) => {
  const icon: CSSProperties = { display: "block", ...style };
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      focusable="false"
      style={icon}
      viewBox="0 0 24 24"
    >
      <path d={d}></path>
    </svg>
  );
};

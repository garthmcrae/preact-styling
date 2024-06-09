import { CSSProperties, ReactNode } from "react";

export const Label = ({
  children,
  element = "h2",
  htmlFor,
  id,
}: {
  children: ReactNode;
  element?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "label" | "p";
  htmlFor?: string;
  id?: string;
}) => {
  const Element = element;
  const label: CSSProperties = {
    fontSize: 12,
    fontWeight: 500,
    marginBottom: 0,
    marginTop: 0,
  };
  return (
    <Element style={label} id={id} htmlFor={htmlFor}>
      {children}
    </Element>
  );
};

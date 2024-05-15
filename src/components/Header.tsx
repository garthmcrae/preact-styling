import { CSSProperties } from "react";
import { label, link, listReset } from "../styles";
import { Container } from "./Container";
import { useWindowLocationPathnameLink } from "../hooks/useWindowLocationPathnameLink";

export const Header = () => {
  const handleWindowLocationPathname = useWindowLocationPathnameLink();
  const list: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    ...listReset,
  };
  const nav: CSSProperties = {
    padding: 16,
  };
  return (
    <header>
      <Container>
        <nav style={nav} aria-describedby="nav-heading">
          <h2 style={label} id="nav-heading">
            Site navigation
          </h2>
          <ul style={list}>
            <li>
              <a style={link} href="#main">
                #main
              </a>
            </li>
            <li>
              <a style={link} href="/" onClick={handleWindowLocationPathname}>
                /
              </a>
            </li>
            <li>
              <a
                style={link}
                href="/components"
                onClick={handleWindowLocationPathname}
              >
                /components
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

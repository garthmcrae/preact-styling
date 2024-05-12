import { CSSProperties } from "react";
import { Container } from "./Container";

export const Header = () => {
  const label: CSSProperties = {
    fontSize: 12,
    marginBottom: 16,
    marginTop: 0,
  };
  const link: CSSProperties = {
    borderColor: "currentcolor",
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: 2,
    color: "inherit",
    display: "block",
    fontSize: 32,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 8,
    textDecoration: "none",
  };
  const list: CSSProperties = {
    display: "flex",
    gap: 16,
    listStyle: "none",
    margin: 0,
    padding: 0,
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
              <a style={link} href="/">
                /
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

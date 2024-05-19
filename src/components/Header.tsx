import { CSSProperties } from "react";
import { border, label, link, listReset } from "../styles";
import { Container } from "./Container";
import { Drawer } from "./Drawer";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";

export const Header = () => {
  const goToPathname = useGoToPathname();
  const innerWidth = useWindowInnerWidth();
  const hash: CSSProperties = {
    display: "inline-block",
    marginRight: "0.25em",
    transform: "translateY(0.0625em)",
  };
  const list = atMediaMinWidth(
    {
      0: {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: 16,
        ...listReset,
      },
      800: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 16,
        ...listReset,
      },
    },
    innerWidth
  );
  const nav: CSSProperties = {
    padding: 16,
  };
  const skip: CSSProperties = {
    ...border,
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: 16,
    paddingBottom: 5,
    paddingLeft: 6,
    paddingRight: 6,
    paddingTop: 3,
    textDecoration: "none",
    width: "max-content",
  };
  const slash: CSSProperties = {
    display: "inline-block",
    marginRight: "0.25em",
  };
  return (
    <>
      <header>
        <Container>
          <nav style={nav} aria-describedby="nav-heading">
            <a style={skip} href="#content">
              <span style={hash}>#</span>
              content
            </a>
            <Drawer>
              <h2 style={label} id="nav-heading">
                Site navigation
              </h2>
              <ul style={list}>
                <li>
                  <a style={link} href="/" onClick={goToPathname}>
                    /
                  </a>
                </li>
                <li>
                  <a style={link} href="/routing" onClick={goToPathname}>
                    <span style={slash}>/</span>
                    routing
                  </a>
                </li>
                <li>
                  <a style={link} href="/styling" onClick={goToPathname}>
                    <span style={slash}>/</span>
                    styling
                  </a>
                </li>
                <li>
                  <a style={link} href="/components" onClick={goToPathname}>
                    <span style={slash}>/</span>
                    components
                  </a>
                </li>
                <li>
                  <a style={link} href="/references" onClick={goToPathname}>
                    <span style={slash}>/</span>
                    references
                  </a>
                </li>
              </ul>
            </Drawer>
          </nav>
        </Container>
      </header>
    </>
  );
};

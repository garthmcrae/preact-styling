import { CSSProperties } from "react";
import { label, link, listReset } from "../styles";
import { Container } from "./Container";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Header = () => {
  const goToPathname = useGoToPathname();
  const list: CSSProperties = {
    display: "flex",
    flexWrap: "wrap",
    gap: 16,
    ...listReset,
  };
  const nav: CSSProperties = {
    padding: 16,
  };
  const skip: CSSProperties = {
    borderColor: "currentcolor",
    borderRadius: 0,
    borderStyle: "solid",
    borderWidth: 1,
    color: "inherit",
    cursor: "pointer",
    display: "block",
    fontSize: 16,
    lineHeight: 1,
    marginBottom: 16,
    paddingBottom: 8,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop: 4,
    textDecoration: "none",
    width: "max-content",
  };
  return (
    <>
      <header>
        <Container>
          <nav style={nav} aria-describedby="nav-heading">
            <a style={skip} href="#content">
              <span
                style={{
                  display: "inline-block",
                  marginRight: "0.25em",
                  transform: "translateY(0.05em)",
                }}
              >
                #
              </span>
              content
            </a>
            <h2 style={label} id="nav-heading">
              Site navigation
            </h2>
            <ul style={list}>
              <li>
                <a
                  style={{ ...link, textAlign: "center" }}
                  href="/"
                  onClick={goToPathname}
                >
                  /
                </a>
              </li>
              <li>
                <a style={link} href="/components" onClick={goToPathname}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "0.25em",
                    }}
                  >
                    /
                  </span>
                  components
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

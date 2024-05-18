import { CSSProperties } from "react";
import { border, hash, label, link, listReset } from "../styles";
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
  return (
    <>
      <header>
        <Container>
          <nav style={nav} aria-describedby="nav-heading">
            <a style={skip} href="#content">
              <span style={hash}>#</span>
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
                <a style={link} href="/routing" onClick={goToPathname}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "0.25em",
                    }}
                  >
                    /
                  </span>
                  routing
                </a>
              </li>
              <li>
                <a style={link} href="/styling" onClick={goToPathname}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "0.25em",
                    }}
                  >
                    /
                  </span>
                  styling
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
              <li>
                <a style={link} href="/observations" onClick={goToPathname}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "0.25em",
                    }}
                  >
                    /
                  </span>
                  observations
                </a>
              </li>
              <li>
                <a style={link} href="/references" onClick={goToPathname}>
                  <span
                    style={{
                      display: "inline-block",
                      marginRight: "0.25em",
                    }}
                  >
                    /
                  </span>
                  references
                </a>
              </li>
            </ul>
          </nav>
        </Container>
      </header>
    </>
  );
};

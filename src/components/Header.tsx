import { CSSProperties } from "react";
import {
  border,
  fadeInUp,
  label,
  link as linkBase,
  listReset,
} from "../styles";
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
    transform: "translateY(0.0625em)",
  };
  const link: CSSProperties = {
    ...linkBase,
    display: "block",
  };
  const list = atMediaMinWidth(
    {
      0: {
        alignItems: "stretch",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: 16,
        ...listReset,
      },
      880: {
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
  return (
    <>
      <header>
        <Container>
          <nav style={nav} aria-describedby="nav-heading">
            <a style={skip} href="#content">
              <span style={hash}>#</span>content
            </a>
            <Drawer>
              <h2 style={label} id="nav-heading">
                Site navigation
              </h2>
              <ul style={list}>
                {[
                  "/",
                  "/routing",
                  "/styling",
                  "/components",
                  "/references",
                ].map((item, index) => (
                  <li
                    style={{ ...fadeInUp, animationDelay: `${index * 100}ms` }}
                    key={item}
                  >
                    <a style={link} href={item} onClick={goToPathname}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Drawer>
          </nav>
        </Container>
      </header>
    </>
  );
};

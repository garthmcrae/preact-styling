import { CSSProperties } from "react";
import { Container } from "./Container";
import { Drawer } from "./Drawer";
import { Icon, hash } from "./Icon";
import { Label } from "./Label";
import { Link } from "./Link";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { useWindowInnerWidth } from "../hooks/useWindowInnerWidth";
import { atMediaMinWidth } from "../utilities/atMediaMinWidth";
import { border, breakpoint, fadeInUp } from "../styles";

export const Header = () => {
  const goToPathname = useGoToPathname();
  const innerWidth = useWindowInnerWidth();
  const list = atMediaMinWidth(
    {
      0: {
        alignItems: "stretch",
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        gap: 16,
        listStyle: "none",
        marginBottom: 0,
        marginTop: 0,
        paddingInlineStart: 0,
      },
      [breakpoint]: {
        flexDirection: "row",
        flexWrap: "wrap",
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
    fontSize: 20,
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: 16,
    paddingBottom: 5,
    paddingLeft: 26,
    paddingRight: 6,
    paddingTop: 3,
    position: "relative",
    textDecoration: "none",
    width: "max-content",
  };
  return (
    <>
      <header>
        <Container>
          <nav style={nav} aria-describedby="nav-heading">
            <a style={skip} href="#content">
              <Icon
                d={hash}
                style={{
                  height: 24,
                  left: 2,
                  position: "absolute",
                  top: 2,
                  width: 24,
                }}
              />
              content
            </a>
            <Drawer>
              <Label id="nav-heading">Site navigation</Label>
              <ul style={list}>
                {[
                  "/",
                  "/routing/",
                  "/styling/",
                  "/components/",
                  "/thoughts/",
                ].map((item, index) => (
                  <li
                    style={{ ...fadeInUp, animationDelay: `${index * 100}ms` }}
                    key={item}
                  >
                    <Link href={item} onClick={goToPathname}>
                      {item}
                    </Link>
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

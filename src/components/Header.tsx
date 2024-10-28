import { CSSProperties } from "react";
import { Container } from "./Container";
import { Drawer } from "./Drawer";
import { Label } from "./Label";
import { Link } from "./Link";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { fadeInUp } from "../styles";

const brand: CSSProperties = {
  backgroundColor: "var(--color)",
  color: "var(--background-color)",
  display: "block",
  fontSize: 32,
  paddingBottom: 8,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8,
  textAlign: "center",
  textDecoration: "none",
};
const list: CSSProperties = {
  alignItems: "stretch",
  display: "flex",
  flexDirection: "column",
  flexWrap: "nowrap",
  gap: 16,
  listStyle: "none",
  marginBottom: 0,
  marginTop: 0,
  paddingInlineStart: 0,
};

const nav: CSSProperties = {
  alignItems: "flex-start",
  display: "flex",
  gap: 16,
  padding: 16,
};
const skip: CSSProperties = {
  color: "inherit",
  cursor: "pointer",
  display: "block",
  fontSize: 12,
  fontWeight: 700,
  lineHeight: 1,
  marginBottom: 0,
  marginLeft: 16,
  marginRight: "auto",
  marginTop: 16,
  paddingBottom: 2,
  paddingLeft: 2,
  paddingRight: 2,
  paddingTop: 2,
  textDecoration: "none",
  width: "max-content",
};

export const Header = () => {
  const goToPathname = useGoToPathname();
  return (
    <>
      <a style={skip} href="#content">
        Skip to content
      </a>
      <header>
        <Container>
          <nav style={nav} aria-describedby="nav-heading">
            <a style={brand} href="/">
              **** **
            </a>
            <div style={{ marginLeft: "auto" }}>
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
                      style={{
                        ...fadeInUp,
                        animationDelay: `${index * 100}ms`,
                      }}
                      key={item}
                    >
                      <Link href={item} onClick={goToPathname}>
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </Drawer>
            </div>
          </nav>
        </Container>
      </header>
    </>
  );
};

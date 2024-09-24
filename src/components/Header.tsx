import { CSSProperties } from "react";
import { Container } from "./Container";
import { Drawer } from "./Drawer";
import { Label } from "./Label";
import { Link } from "./Link";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { border, fadeInUp, padding } from "../styles";

const brand: CSSProperties = {
  backgroundColor: "var(--color)",
  color: "var(--background-color)",
  display: "block",
  fontSize: 40,
  paddingBottom: 4,
  paddingLeft: 12,
  paddingRight: 12,
  paddingTop: 4,
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
  ...border,
  color: "inherit",
  cursor: "pointer",
  display: "block",
  fontSize: 24,
  fontWeight: 500,
  lineHeight: 1,
  ...padding,
  textDecoration: "none",
};

export const Header = () => {
  const goToPathname = useGoToPathname();
  return (
    <>
      <header>
        <Container>
          <nav style={nav} aria-describedby="nav-heading">
            <a style={brand} href="/">
              NO
            </a>
            <a style={skip} href="#content">
              Skip to content
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

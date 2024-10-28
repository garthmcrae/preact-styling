import { CSSProperties } from "react";
import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Mode } from "../components/Mode";

const footer: CSSProperties = {
  justifySelf: "flex-end",
  marginTop: "auto",
};
const paragraph: CSSProperties = {
  fontSize: 12,
  fontWeight: "bold",
  lineHeight: 1,
};

export const Footer = () => {
  return (
    <>
      <footer style={footer}>
        <Mode />
        <Container>
          <Box>
            <p style={paragraph}>Built using Vite and Preact</p>
          </Box>
        </Container>
      </footer>
    </>
  );
};

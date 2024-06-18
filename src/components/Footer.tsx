import { CSSProperties } from "react";
import { Box } from "./Box";
import { Container } from "./Container";
import { Mode } from "./Mode";

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

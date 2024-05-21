import { ReactNode } from "react";
import { Banner } from "../components/Banner";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { label, link } from "../styles";

import buildRaw from "../build.txt?raw";
import packageRaw from "../../package.json?raw";

const Strike = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: "line-through" }}>{children}</span>
);

export function Root() {
  const goToPathname = useGoToPathname();
  return (
    <Page>
      <Container>
        <Box>
          <PageHeading>Hello</PageHeading>
        </Box>
        <Banner>
          This is a work in <strong>progress</strong>.
        </Banner>
        <Box>
          <Paragraph first>
            This exercise explores <Strike>achievable styling in</Strike> React
            without using <Strike>CSS in JS</Strike> libraries.
          </Paragraph>
        </Box>
        <Box>
          <Code>{buildRaw}</Code>
        </Box>
        <Box>
          <Heading>Package</Heading>
        </Box>
        <Box>
          <Code>{packageRaw}</Code>
        </Box>
        <Box>
          <h3 style={label}>Up next</h3>
          <a style={link} href="/routing" onClick={goToPathname}>
            /routing
          </a>
        </Box>
      </Container>
    </Page>
  );
}

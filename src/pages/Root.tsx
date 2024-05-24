import { ReactNode } from "react";
import { Banner } from "../components/Banner";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Label } from "../components/Label";
import { Page } from "../components/Page";
import { HeadingPage } from "../components/HeadingPage";
import { Paragraph } from "../components/Paragraph";

import buildRaw from "../build.txt?raw";
import packageRaw from "../../package.json?raw";

const Strike = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: "line-through" }}>{children}</span>
);

export function Root() {
  return (
    <Page>
      <Container>
        <Box>
          <HeadingPage>Hello</HeadingPage>
        </Box>
        <Banner>
          <Box>
            <Label element="h3">Information</Label>
            <Paragraph first last>
              This is a work in progress.
            </Paragraph>
          </Box>
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
      </Container>
    </Page>
  );
}

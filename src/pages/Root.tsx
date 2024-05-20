import { ReactNode } from "preact/compat";
import { Banner } from "../components/Banner";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";

import packageString from "../../package.json?raw";

const Strike = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: "line-through" }}>{children}</span>
);

export function Root() {
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
          <Heading>Package</Heading>
        </Box>
        <Box>
          <Code>{packageString}</Code>
        </Box>
        {/* <Box>
          <button
            style={button}
            onClick={() => {
              handleWindowLocationPathname("/components");
            }}
          >
            /components
          </button>
        </Box> */}
      </Container>
    </Page>
  );
}

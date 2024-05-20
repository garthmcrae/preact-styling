import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";

import routesString from "../components/Routes?raw";
import routerString from "../Router.tsx?raw";
import useGoToPathnameString from "../hooks/useGoToPathname.ts?raw";
import useWindowLocationPathnameString from "../hooks/useWindowLocationPathname.ts?raw";
import windowLocationPathnameContextString from "../contexts/WindowLocationPathnameContext.tsx?raw";

export function Routing() {
  return (
    <Page>
      <Container>
        <Box>
          <PageHeading>Routing</PageHeading>
        </Box>
        <Box>
          <Paragraph first last>
            The approach ...
          </Paragraph>
        </Box>
        <section id="how">
          <Box>
            <Heading>The code</Heading>
          </Box>
          <Box>
            <Paragraph first last>
              The context ...
            </Paragraph>
          </Box>
          <Box>
            <Code>{windowLocationPathnameContextString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              Wrapping this in a hook to reduce number of imports required where
              consumed.
            </Paragraph>
          </Box>
          <Box>
            <Code>{useWindowLocationPathnameString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              Used in conjunction with an anchor is probably the most common use
              case although you can also call this with a string within a
              function for example a button click or form submission.
            </Paragraph>
          </Box>
          <Box>
            <Code>{useGoToPathnameString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              Routes component ...
            </Paragraph>
          </Box>
          <Box>
            <Code>{routesString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              Usage as follows.
            </Paragraph>
          </Box>
          <Box>
            <Code>{routerString}</Code>
          </Box>
        </section>
      </Container>
    </Page>
  );
}

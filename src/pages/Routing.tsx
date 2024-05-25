import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { HeadingPage } from "../components/HeadingPage";
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
          <HeadingPage>Routing</HeadingPage>
        </Box>
        <Box>
          <Paragraph first last>
            Routing allows users to navigate to and from pages within an
            application. A component or page based on a specific pathname
            entered via the URL or updated when a user clicks on a link. Routes
            can also be linked to when a user enters the application.
          </Paragraph>
        </Box>
        <section id="how">
          <Box>
            <Heading>Implementation</Heading>
          </Box>
          <Box>
            <Paragraph first last>
              A context provides the window's location pathname also listening
              to the popstate event to update when a user navigates back and
              forth using the browser controls.
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
              function for example a button click or form submission. Users
              scroll position is also returned to zero.
            </Paragraph>
          </Box>
          <Box>
            <Code>{useGoToPathnameString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              The routes component returns a child based on the current
              pathname. If no pathname exists it will route users to a not found
              pathname.
            </Paragraph>
          </Box>
          <Box>
            <Code>{routesString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              Usage as follows. Note the trailing slashes — by default browsers
              add the trailing slash to pathnames on refresh. Defining paths
              with trailing slashes prevents the need to have additional logic
              to handle trailing slashes.
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

import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { HeadingPage } from "../components/HeadingPage";
import { Paragraph } from "../components/Paragraph";

import routesRaw from "../components/Routes?raw";
import routerRaw from "../Router.tsx?raw";
import useGoToPathnameRaw from "../hooks/useGoToPathname.ts?raw";
import useWindowLocationPathnameRaw from "../hooks/useWindowLocationPathname.ts?raw";
import windowLocationPathnameContextRaw from "../contexts/WindowLocationPathnameContext.tsx?raw";

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
        <Box>
          <Heading>Implementation</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            A context provides the window's location pathname also listening to
            the popstate event to update when a user navigates back and forth
            using the browser controls.
          </Paragraph>
        </Box>
        <Box>
          <Code>{windowLocationPathnameContextRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Wrapping this in a hook to reduce number of imports required where
            consumed.
          </Paragraph>
        </Box>
        <Box>
          <Code>{useWindowLocationPathnameRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            The routes component returns a child based on the current pathname.
            If no pathname exists it will route users to a not found pathname.
          </Paragraph>
        </Box>
        <Box>
          <Code>{routesRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Usage as follows. Note the trailing slashes — by default browsers
            add the trailing slash to pathnames on refresh. Defining paths with
            trailing slashes prevents the need to have additional logic to
            handle trailing slashes.
          </Paragraph>
        </Box>
        <Box>
          <Code>{routerRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            The following can be used in conjunction with an anchor or called
            with a string for example on click or form submission. The window
            scroll position is also returned to zero.
          </Paragraph>
        </Box>
        <Box>
          <Code>{useGoToPathnameRaw}</Code>
        </Box>
      </Container>
    </Page>
  );
}

import { Components } from "../cards/Components";
import { Thoughts } from "../cards/Thoughts";
import { Styling } from "../cards/Styling";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { FlexContainer } from "../components/FlexContainer";
import { FlexItem } from "../components/FlexItem";
import { Heading } from "../components/Heading";
import { Hyperboloid } from "../graphics/Hyperboloid";
import { Label } from "../components/Label";
import { Page } from "../components/Page";
import { PageBanner } from "../components/PageBanner";
import { PageHeading } from "../components/PageHeading";
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
        <PageBanner>
          <Box>
            <Hyperboloid />
          </Box>
          <Box>
            <PageHeading>ROUTING</PageHeading>
          </Box>
        </PageBanner>
        <Box>
          <Paragraph first last>
            Routing allows users to navigate to and from pages within an
            application. A component or page based on a specific pathname
            entered via the URL or updated when a user clicks on a link. Routes
            can also be linked to when a user enters the application.
          </Paragraph>
        </Box>
        <Box>
          <Heading>How</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            A context provides the window's location pathname also listening to
            the popstate event to update when a user navigates back and forth
            using the browser controls.
          </Paragraph>
        </Box>
        <Box>
          <Label>WindowLocationPathnameContext.tsx</Label>
          <Code>{windowLocationPathnameContextRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Wrapping this in a hook to reduce number of imports required where
            consumed.
          </Paragraph>
        </Box>
        <Box>
          <Label>useWindowLocationPathname.ts</Label>
          <Code>{useWindowLocationPathnameRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            The routes component returns a child based on the current pathname.
            If no pathname exists it will route users to a not found pathname.
          </Paragraph>
        </Box>
        <Box>
          <Label>Routes.tsx</Label>
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
          <Label>Router.tsx</Label>
          <Code>{routerRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            The following can be used in conjunction with an anchor or called
            with a string for example on click or form submission.
          </Paragraph>
        </Box>
        <Box>
          <Label>useGoToPathname.ts</Label>
          <Code>{useGoToPathnameRaw}</Code>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <FlexContainer breakpoint={768}>
            <FlexItem>
              <Styling />
            </FlexItem>
            <FlexItem>
              <Components />
            </FlexItem>
            <FlexItem>
              <Thoughts />
            </FlexItem>
          </FlexContainer>
        </Box>
      </Container>
    </Page>
  );
}

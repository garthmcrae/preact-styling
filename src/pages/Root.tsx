import { ReactNode, useEffect } from "react";
import { Components } from "../cards/Components";
import { Routing } from "../cards/Routing";
import { Styling } from "../cards/Styling";
import { Alert } from "../components/Alert";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { FlexContainer } from "../components/FlexContainer";
import { FlexItem } from "../components/FlexItem";
import { Heading } from "../components/Heading";
import { HeadingPage } from "../components/HeadingPage";
import { Label } from "../components/Label";
import { Page } from "../components/Page";
import { Paragraph } from "../components/Paragraph";
import { Void } from "../graphics/Void";

import packageRaw from "../../package.json?raw";

const Strike = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: "line-through" }}>{children}</span>
);

const Accent = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "crimson" }}>{children}</span>
);

export function Root() {
  useEffect(() => {
    document.documentElement.style.setProperty("--focus", "crimson");
  }, []);
  return (
    <Page>
      <Container>
        <Box>
          <Void />
        </Box>
        <Box>
          <HeadingPage>
            React <Accent>NO</Accent>
          </HeadingPage>
        </Box>
        <Box>
          <Paragraph first last>
            <Accent>What happens if you don't add all the dependencies?</Accent>{" "}
            This is an exercise to explore building responsive React
            applications without adding any additional{" "}
            <Strike>CSS in JS</Strike> packages (including React itself).
          </Paragraph>
        </Box>
        <Alert>
          <Box>
            <Label element="h2">Warning</Label>
            <Paragraph first last>
              This is a work in progress and there may be spelling errors.
            </Paragraph>
          </Box>
        </Alert>
        <Box>
          <Heading>Tooling</Heading>
        </Box>
        <Box>
          <Paragraph first>
            For build we are using Vite the "next generation frontend tooling".
            It consists of a development server and "a build command that
            bundles your code with Rollup, pre-configured to output highly
            optimized static assets for production".
          </Paragraph>
          <Paragraph>
            Rollup is also the JavaScript module bundler. If I was to publish
            any of the files from this project to NPM I would use Rollup to
            bundle the module.
          </Paragraph>
          <Paragraph>
            So Rollup pre-configured — great. Highly recommend checking out
            Rollup and Vite if you haven't already.
          </Paragraph>
          <Paragraph last>
            Something I found really neat was Vite allows you to easily import
            raw files as a string so adding code examples to this project was a
            cinch. Although I'm also suspiscious when reviewing the bundle that
            the string literals for the code aren't minified, add to build and
            also render slowly.
          </Paragraph>
        </Box>
        <Box>
          <Code>{`
import packageRaw from "../../package.json?raw";
          `}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            So now with that let's take a look at some files.
          </Paragraph>
        </Box>
        <Box>
          <Label element="h3">package.json</Label>
          <Code>{packageRaw}</Code>
        </Box>
        <Box>
          <Paragraph first>
            Bit of a give away here in the name — this is a Preact project not a
            React project. Preact is a "fast 3kB alternative to React with the
            same modern API". For an additional ~2kB you can include a React
            compatibility layer which means at surface level components look
            identical and can be copied and used in either React or Preact
            projects.
          </Paragraph>
          <Paragraph>
            If you haven't already I recommend checking it out.
          </Paragraph>
          <Paragraph last>
            Last but not least this project also uses TypeScript.
          </Paragraph>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <FlexContainer breakpoint={768}>
            <FlexItem>
              <Routing />
            </FlexItem>
            <FlexItem>
              <Styling />
            </FlexItem>
            <FlexItem>
              <Components />
            </FlexItem>
          </FlexContainer>
        </Box>
      </Container>
    </Page>
  );
}

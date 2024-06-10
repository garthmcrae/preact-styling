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

import buildRaw from "../build.txt?raw";
import packageRaw from "../../package.json?raw";

const Strike = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: "line-through" }}>{children}</span>
);

const Color = ({ children }: { children: ReactNode }) => (
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
            What happens if you <Color>don't</Color> add all the dependencies?
          </HeadingPage>
        </Box>
        <Box>
          <Paragraph first last>
            This is an exercise to explore using React without adding additional{" "}
            <Strike>CSS in JS</Strike> packages (including React itself).
          </Paragraph>
        </Box>
        <Alert>
          <Box>
            <Label element="h2">Information</Label>
            <Paragraph first last>
              This is a work in progress.
            </Paragraph>
          </Box>
        </Alert>
        <Box>
          <Heading>Summary</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            Something I found really nifty was Vite allows you to easily import
            raw files as a string so adding code examples to this page was super
            easy.
          </Paragraph>
        </Box>
        <Box>
          <Code>{`
import buildRaw from "../build.txt?raw";
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
            identical.
          </Paragraph>
          <Paragraph>
            If you haven't already I recommend checking it out.
          </Paragraph>
          <Paragraph>
            For build we are using Vite the "next generation frontend tooling".
            It consists of a development server and "a build command that
            bundles your code with Rollup, pre-configured to output highly
            optimized static assets for production".
          </Paragraph>
          <Paragraph>
            Rollup is also the JavaScript module bundler. If I was to publish
            this to NPM I would use Rollup to bundle the module.
          </Paragraph>
          <Paragraph>
            So Rollup pre-configured — great. Highly recommend checking out
            Rollup and Vite if you haven't already as well.
          </Paragraph>
          <Paragraph last>Last but not least TypeScript.</Paragraph>
        </Box>
        <Box>
          <Heading>Build output</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            I'm running the following to write the build output to a file so we
            can see what size the final built assets are.
          </Paragraph>
        </Box>
        <Box>
          <Code>{"npm run build > src/build.txt"}</Code>
        </Box>
        <Box>
          <Code>{buildRaw}</Code>
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

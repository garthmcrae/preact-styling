import { ReactNode } from "react";
import { Alert } from "../components/Alert";
import { Box } from "../components/Box";
import { Card } from "../components/Card";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { FlexItem } from "../components/FlexItem";
import { FlexContainer } from "../components/FlexContainer";
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

const Color = ({ children }: { children: ReactNode }) => (
  <span style={{ color: "crimson" }}>{children}</span>
);

export function Root() {
  return (
    <Page>
      <Container>
        <Box>
          <HeadingPage>
            What happens if you <Color>don't</Color> add all the dependencies?
          </HeadingPage>
        </Box>
        <Box>
          <Paragraph first last>
            This exercise explores using React without including any{" "}
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
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <FlexContainer>
            <FlexItem>
              <Card href="/routing/">
                <Label>Routing</Label>
                <Paragraph first last>
                  A context and functions for handling pages and navigation.
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card href="/styling/">
                <Label>Styling</Label>
                <Paragraph first last>
                  A context and functions for handling responsive styles.
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card href="/components/">
                <Label>Components</Label>
                <Paragraph first last>
                  Some components to see what the built file size looks like.
                </Paragraph>
              </Card>
            </FlexItem>
          </FlexContainer>
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
          <Heading>Package file</Heading>
        </Box>
        <Box>
          <Code>{packageRaw}</Code>
        </Box>
      </Container>
    </Page>
  );
}

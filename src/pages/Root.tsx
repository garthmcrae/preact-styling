import { ReactNode } from "react";
import { Alert } from "../components/Alert";
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
import { ImageLoader } from "../components/Image";

const Strike = ({ children }: { children: ReactNode }) => (
  <span style={{ textDecoration: "line-through" }}>{children}</span>
);

export function Root() {
  return (
    <Page>
      <Container>
        <Box>
          <HeadingPage>Preact styling</HeadingPage>
        </Box>
        <ImageLoader
          url={
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
        />
        <Alert>
          <Box>
            <Label element="h2">Information</Label>
            <Paragraph first last>
              This is a work in progress.
            </Paragraph>
          </Box>
        </Alert>
        <Box>
          <Paragraph first last>
            This exercise explores <Strike>achievable styling in</Strike> React
            without using <Strike>CSS in JS</Strike> libraries.
          </Paragraph>
        </Box>
        <Box>
          <Paragraph first last>
            I'm using the following to write the build output to a file so we
            can see what the final built asset sizes are.
          </Paragraph>
        </Box>
        <Box>
          <Code>{"npm run build -- > src/build.txt"}</Code>
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

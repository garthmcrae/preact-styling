import { Root } from "../cards/Root";
import { Routing } from "../cards/Routing";
import { Styling } from "../cards/Styling";

import { Box } from "../components/Box";
import { Card } from "../components/Card";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Control } from "../components/Control";
import { FlexContainer } from "../components/FlexContainer";
import { FlexItem } from "../components/FlexItem";
import { Heading } from "../components/Heading";
import { Label } from "../components/Label";
import { Page } from "../components/Page";
import { PageBanner } from "../components/PageBanner";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";

import { Plane } from "../objects/Plane";
import { Pyramid } from "../objects/Pyramid";

import buildRaw from "../build.txt?raw";

export function Thoughts() {
  return (
    <Page>
      <Container>
        <PageBanner>
          <Box>
            <Plane />
          </Box>
          <Box>
            <PageHeading>THOUGHTS</PageHeading>
          </Box>
        </PageBanner>
        <Box>
          <Heading>Reactions</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            Worth noting this came together really quickly. I think it's because
            I never had to switch gears between the TS(X) and CSS you just write
            components.
          </Paragraph>
        </Box>
        <Box>
          <FlexContainer breakpoint={834}>
            <FlexItem>
              <Card href="https://preactjs.com" target="_blank">
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Label element="h3">https://preactjs.com</Label>
                <Paragraph first last>
                  Fast 3kB alternative to React with the same modern API
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card href="https://vitejs.dev" target="_blank">
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Label element="h3">https://vitejs.dev</Label>
                <Paragraph first last>
                  Vite Next Generation Frontend Tooling
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card href="https://rollupjs.org" target="_blank">
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Label element="h3">https://rollupjs.org</Label>
                <Paragraph first last>
                  rollup.js The JavaScript module bundler
                </Paragraph>
              </Card>
            </FlexItem>
          </FlexContainer>
        </Box>
        <Box>
          <FlexContainer breakpoint={834}>
            <FlexItem>
              <Card
                href="https://developer.mozilla.org/docs/Web/API/HTMLElement/style"
                target="_blank"
              >
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Label element="h3">https://developer.mozilla.org</Label>
                <Paragraph first last>
                  HTMLElement: style property
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card
                href="https://www.youtube.com/watch?v=1gZmkpsVGkk/"
                target="_blank"
              >
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Label element="h3">Theo - t3.gg</Label>
                <Paragraph first last>
                  CSS Is 2.4x Slower Than Inline Styles (Oh No...)
                </Paragraph>
              </Card>
            </FlexItem>
            <FlexItem>
              <Card
                href="https://medium.com/@davidyf96/how-to-use-media-queries-in-javascript-6489d46822d8"
                target="_blank"
              >
                <div style={{ marginBottom: 16 }}>
                  <Pyramid />
                </div>
                <Label element="h3">David el Yosef</Label>
                <Paragraph first last>
                  How to use media queries in JavaScript?
                </Paragraph>
              </Card>
            </FlexItem>
          </FlexContainer>
        </Box>
        <Box>
          <Paragraph first last>
            I'm running the following to write the build output to a file so we
            can see what size the final built files are. As you can see it's
            **** all.
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
          <Control
            style={{
              0: { display: "flex", flexDirection: "column", gap: 16 },
              932: { flexDirection: "row" },
            }}
          >
            {[<Root />, <Routing />, <Styling />].map((card, index) => (
              <Control
                key={`article${index}`}
                style={{
                  932: {
                    flexBasis: "auto",
                    flexGrow: 1,
                    flexShrink: 1,
                  },
                }}
              >
                {card}
              </Control>
            ))}
          </Control>
        </Box>
      </Container>
    </Page>
  );
}

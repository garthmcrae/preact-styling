import { Root } from "../cards/Root";
import { Routing } from "../cards/Routing";
import { Styling } from "../cards/Styling";

import { Box } from "../components/Box";
import { Card } from "../components/Card";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { FlexContainer } from "../components/FlexContainer";
import { FlexItem } from "../components/FlexItem";
import { Heading } from "../components/Heading";
import { HeadingPage } from "../components/HeadingPage";
import { Label } from "../components/Label";
import { Page } from "../components/Page";
import { Paragraph } from "../components/Paragraph";

import { Plane } from "../graphics/Plane";
import { Pyramid } from "../graphics/Pyramid";

import buildRaw from "../build.txt?raw";

export function Thoughts() {
  return (
    <Page>
      <Container>
        <Box>
          <Plane />
        </Box>
        <Box>
          <HeadingPage>Thoughts</HeadingPage>
        </Box>
        <Box>
          <Paragraph first>
            Next steps for this exercise — publish some of this to NPM. Validate
            if Preact modules are compatible with React projects. Install a
            React library into a Preact project. Memoize those style objects or
            move those that aren't using window width to outside the consuming
            functions (reduce unnecessary re-renders because apparently style
            objects within a component function are not equal between subsequant
            renders but needs further reading).
          </Paragraph>
          <Paragraph>
            Reminder to talk about scroll behaviour on the root element (this
            was new to me but I tell you what, not bad at all).
          </Paragraph>
          <Paragraph>
            This has been an interesting exercise to date and I'm curious to see
            where this goes. It would be nice to one day create my last CSS,
            SCSS module file or other and not know that that was the last time.
          </Paragraph>
          <Paragraph last>
            Also worth noting this came together really quickly. I think it's
            because I never had to switch gears between the TS(X) and CSS you
            just write components.
          </Paragraph>
        </Box>
        <Box>
          <Heading>References</Heading>
        </Box>
        <Box>
          <Paragraph>
            Worth a look but please also do your own research.
          </Paragraph>
        </Box>
        <Box>
          <FlexContainer breakpoint={768}>
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
          <FlexContainer breakpoint={768}>
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
              <Root />
            </FlexItem>
            <FlexItem>
              <Routing />
            </FlexItem>
            <FlexItem>
              <Styling />
            </FlexItem>
          </FlexContainer>
        </Box>
      </Container>
    </Page>
  );
}

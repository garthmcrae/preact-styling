import { useEffect } from "react";
import { Root } from "../cards/Root";
import { Routing } from "../cards/Routing";
import { Styling } from "../cards/Styling";
import { Box } from "../components/Box";
import { Card } from "../components/Card";
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

// https://www.youtube.com/watch?v=1gZmkpsVGkk
// npm run build -- > src/build.txt
// https://medium.com/@davidyf96/how-to-use-media-queries-in-javascript-6489d46822d8

export function Thoughts() {
  useEffect(() => {
    document.documentElement.style.setProperty("--focus", "orange");
  }, []);
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
          <Paragraph first last>
            Further reading. Final thoughts and also a reminder to talk about
            scroll behaviour on the root element (this was new to me but I tell
            you what, not bad at all). Next steps, publish some of this to NPM
            to validate if Preact modules are compatible with React. Install a
            React lib into a Preact project.
          </Paragraph>
        </Box>
        <Box>
          <Heading>Links</Heading>
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

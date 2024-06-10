import { useEffect } from "react";
import { References } from "../cards/References";
import { Root } from "../cards/Root";
import { Routing } from "../cards/Routing";
import { Alert } from "../components/Alert";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Cube } from "../graphics/Cube";
import { FlexContainer } from "../components/FlexContainer";
import { FlexItem } from "../components/FlexItem";
import { Heading } from "../components/Heading";
import { HeadingPage } from "../components/HeadingPage";
import { Label } from "../components/Label";
import { Modal } from "../components/Modal";
import { Page } from "../components/Page";
import { Paragraph } from "../components/Paragraph";
import { Picture } from "../components/Picture";

import focusTrapRaw from "../components/FocusTrap.tsx?raw";
import modalRaw from "../components/Modal.tsx?raw";
import pictureRaw from "../components/Picture.tsx?raw";
import hyperboloidRaw from "../graphics/Hyperboloid.tsx?raw";

export function Components() {
  useEffect(() => {
    document.documentElement.style.setProperty("--focus", "lime");
  }, []);
  return (
    <Page>
      <Container>
        <Box>
          <Cube />
        </Box>
        <Box>
          <HeadingPage>Components</HeadingPage>
        </Box>
        <Box>
          <Paragraph>
            I wrote a few for this project but don't worry I'm not going to do a
            write up on all of them — a few to note. The rest you can view on my
            Github. I'm also suspiscious when reviewing the bundle that the
            string literals for the code aren't minified, add to build and also
            render slowly.
          </Paragraph>
        </Box>
        <Box>
          <Heading>Modals</Heading>
        </Box>
        <Box>
          <Paragraph>How appropriate to document a modal in a modal.</Paragraph>
        </Box>
        <Box>
          <Modal name="the modal">
            <Box>
              <Heading>Thoughts on modals</Heading>
            </Box>
            <Box>
              <Paragraph first>
                I've always heard modals are complex and have a lot of
                consdierations to cater for accessibility. This is true and I've
                always reached for libraries. That being said it has also
                prevented me from ever interacting with React's portals and ever
                reviewing and implementing focus traps myself (*cough*, Bing /
                GPT-4).
              </Paragraph>
              <Paragraph last>
                I'm not going to talk through this just have geez if you are
                interested.
              </Paragraph>
            </Box>
            <Box>
              <Code>{modalRaw}</Code>
            </Box>
            <Box>
              <Paragraph first>
                Maybe less complicated than I thought. To be honest the React
                documentation on portals was great and made this a pretty
                trivial task.
              </Paragraph>
              <Paragraph last>
                But what about nesting modals I hear you say? So we can
                conceptially navigate deeper rather than laterally to another
                page? With focus traps this actually works pretty well (even
                though I took more time than I would like on the scenario where
                you have a button at the bottom of a modal in a nested modal
                with a focus trap)
              </Paragraph>
            </Box>
            <Box>
              <Modal name="Nested modal">
                <Box>
                  <Heading>Nested modal title</Heading>
                </Box>
                <Box>
                  <Paragraph first>
                    Because we all love a nested modal.
                  </Paragraph>
                  <Paragraph last>
                    When I first saw this it icked me. Now after working with it
                    and debugging and amending a few things I'm okay with this.
                  </Paragraph>
                </Box>
                <Box>
                  <Code>{focusTrapRaw}</Code>
                </Box>
                <Box>
                  <Alert>
                    <Box>
                      <Label element="h3">Warning</Label>
                      <Paragraph first last>
                        There is a bug with this nested modal where the fixed
                        scroll position is removed for both modals when you
                        close the nested modal.
                      </Paragraph>
                    </Box>
                  </Alert>
                </Box>
              </Modal>
            </Box>
          </Modal>
        </Box>
        <Box>
          <Heading>Pictures</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            Not in the bundle. Not blocking. Worth a thought but not more as it
            is a seperate topic — just be considerate as there is no point in
            optimising your code if you are just going to dump huge assets about
            the place.
          </Paragraph>
        </Box>
        <Box>
          <Code>{pictureRaw}</Code>
        </Box>
        <Box>
          <Picture
            url={
              "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Box>
        <Box>
          <Heading>Graphics</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            The header and card are not GIFs would you believe. All the styles
            are inline CSS properties with the exception of the keyframe
            animations. Pretty cool.
          </Paragraph>
        </Box>
        <Box>
          <Code>{hyperboloidRaw}</Code>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <FlexContainer breakpoint={768}>
            <FlexItem>
              <References />
            </FlexItem>
            <FlexItem>
              <Root />
            </FlexItem>
            <FlexItem>
              <Routing />
            </FlexItem>
          </FlexContainer>
        </Box>
      </Container>
    </Page>
  );
}

import { useEffect } from "react";
import { Components } from "../cards/Components";
import { Routing } from "../cards/Routing";
import { Styling } from "../cards/Styling";
import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { FlexContainer } from "../components/FlexContainer";
import { FlexItem } from "../components/FlexItem";
import { Heading } from "../components/Heading";
import { HeadingPage } from "../components/HeadingPage";
import { Page } from "../components/Page";
import { Paragraph } from "../components/Paragraph";
import { Void } from "../graphics/Void";

export function NotFound() {
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
          <HeadingPage>Not found</HeadingPage>
        </Box>
        <Box>
          <Paragraph>
            You have either navigated here directly or been redirected here
            because you entered an invalid route.
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

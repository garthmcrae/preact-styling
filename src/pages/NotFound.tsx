import { Components } from "../cards/Components";
import { Routing } from "../cards/Routing";
import { Styling } from "../cards/Styling";

import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { FlexContainer } from "../components/FlexContainer";
import { FlexItem } from "../components/FlexItem";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { PageBanner } from "../components/PageBanner";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";
import { Void } from "../graphics/Void";

export function NotFound() {
  return (
    <Page>
      <Container>
        <PageBanner>
          <Box>
            <Void />
          </Box>
          <Box>
            <PageHeading>****</PageHeading>
          </Box>
        </PageBanner>
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
          <FlexContainer breakpoint={834}>
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

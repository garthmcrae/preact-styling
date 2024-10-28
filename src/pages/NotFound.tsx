import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { PageBanner } from "../components/PageBanner";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";
import { Void } from "../objects/Void";

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
      </Container>
    </Page>
  );
}

import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { PageHeading } from "../components/PageHeading";

export function NotFound() {
  return (
    <Page>
      <Container>
        <Box>
          <PageHeading>Not found</PageHeading>
        </Box>
      </Container>
    </Page>
  );
}

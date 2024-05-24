import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { HeadingPage } from "../components/HeadingPage";

export function NotFound() {
  return (
    <Page>
      <Container>
        <Box>
          <HeadingPage>Not found</HeadingPage>
        </Box>
      </Container>
    </Page>
  );
}

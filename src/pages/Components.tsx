import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Modal } from "../components/Modal";
import { Page } from "../components/Page";
import { PageHeading } from "../components/PageHeading";

export function Components() {
  return (
    <Page>
      <Container>
        <Box>
          <PageHeading>Components</PageHeading>
        </Box>
        <Box>
          <Modal />
        </Box>
      </Container>
    </Page>
  );
}

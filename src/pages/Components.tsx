import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { HeadingPage } from "../components/HeadingPage";
import { Modal } from "../components/Modal";
import { Page } from "../components/Page";
import { Picture } from "../components/Picture";

export function Components() {
  return (
    <Page>
      <Container>
        <Box>
          <HeadingPage>Components</HeadingPage>
        </Box>
        <Box>
          <Heading>Modal</Heading>
        </Box>
        <Box>
          <Modal />
        </Box>
        <Box>
          <Heading>Picture</Heading>
        </Box>
        <Box>
          <Picture
            url={
              "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=3011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          />
        </Box>
      </Container>
    </Page>
  );
}

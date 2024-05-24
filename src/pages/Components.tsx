import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Modal } from "../components/Modal";
import { Page } from "../components/Page";
import { HeadingPage } from "../components/HeadingPage";
import { Paragraph } from "../components/Paragraph";

export function Components() {
  return (
    <Page>
      <Container>
        <Box>
          <HeadingPage>Components</HeadingPage>
        </Box>
        <Box>
          <Paragraph>Work in progress modal.</Paragraph>
        </Box>
        <Box>
          <Modal />
        </Box>
        <Box>
          <Heading>Notes</Heading>
        </Box>
        <Box>
          <Paragraph>
            Maybe turn the delow into a navigation or action group component.
            The pattern is used so far in the navigation, footer and page
            actions.
          </Paragraph>
        </Box>
      </Container>
    </Page>
  );
}

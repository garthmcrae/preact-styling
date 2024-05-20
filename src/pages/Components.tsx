import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Modal } from "../components/Modal";
import { Page } from "../components/Page";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { label, link } from "../styles";

export function Components() {
  const goToPathname = useGoToPathname();
  return (
    <Page>
      <Container>
        <Box>
          <PageHeading>Components</PageHeading>
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
        <Box>
          <h3 style={label}>Up next</h3>
          <a style={link} href="/references" onClick={goToPathname}>
            /references
          </a>
        </Box>
      </Container>
    </Page>
  );
}

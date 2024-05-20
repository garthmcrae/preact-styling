import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Modal } from "../components/Modal";
import { Page } from "../components/Page";
import { PageHeading } from "../components/PageHeading";
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
          <Modal />
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

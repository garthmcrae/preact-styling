// https://www.youtube.com/watch?v=1gZmkpsVGkk

import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { PageHeading } from "../components/PageHeading";
import { useGoToPathname } from "../hooks/useGoToPathname";
import { label, link } from "../styles";

export function References() {
  const goToPathname = useGoToPathname();
  return (
    <Page>
      <Container>
        <Box>
          <PageHeading>References</PageHeading>
        </Box>
        <Box>
          <h3 style={label}>Up next</h3>
          <a style={link} href="/" onClick={goToPathname}>
            /
          </a>
        </Box>
      </Container>
    </Page>
  );
}

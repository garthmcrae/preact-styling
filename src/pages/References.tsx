// https://www.youtube.com/watch?v=1gZmkpsVGkk
// npm run build -- > src/build.txt

import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { HeadingPage } from "../components/HeadingPage";
import { Page } from "../components/Page";

export function References() {
  return (
    <Page>
      <Container>
        <Box>
          <HeadingPage>References</HeadingPage>
        </Box>
      </Container>
    </Page>
  );
}

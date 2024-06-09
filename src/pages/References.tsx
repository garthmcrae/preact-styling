// https://www.youtube.com/watch?v=1gZmkpsVGkk
// npm run build -- > src/build.txt

import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { HeadingPage } from "../components/HeadingPage";
import { Page } from "../components/Page";
import { Void } from "../graphics/Void";

export function References() {
  return (
    <Page>
      <Container>
        <Box>
          <Void />
        </Box>
        <Box>
          <HeadingPage>References</HeadingPage>
        </Box>
      </Container>
    </Page>
  );
}

import { useEffect } from "react";
import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { HeadingPage } from "../components/HeadingPage";
import { Page } from "../components/Page";
import { Void } from "../graphics/Void";

// https://www.youtube.com/watch?v=1gZmkpsVGkk
// npm run build -- > src/build.txt

export function References() {
  useEffect(() => {
    document.documentElement.style.setProperty("--focus", "crimson");
  }, []);
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

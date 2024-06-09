import { useEffect } from "react";
import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Page } from "../components/Page";
import { HeadingPage } from "../components/HeadingPage";
import { Void } from "../graphics/Void";

export function NotFound() {
  useEffect(() => {
    document.documentElement.style.setProperty("--focus", "green");
  }, []);
  return (
    <Page>
      <Container>
        <Box>
          <Void />
        </Box>
        <Box>
          <HeadingPage>Not found</HeadingPage>
        </Box>
      </Container>
    </Page>
  );
}

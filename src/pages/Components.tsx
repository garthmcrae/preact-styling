import { useEffect } from "react";
import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Cube } from "../graphics/Cube";
import { Heading } from "../components/Heading";
import { HeadingPage } from "../components/HeadingPage";
import { Modal } from "../components/Modal";
import { Octohedron } from "../graphics/Octohedron";
import { Page } from "../components/Page";
import { Paragraph } from "../components/Paragraph";
import { Picture } from "../components/Picture";
import { Hyperboloid } from "../graphics/Hyperboloid";

export function Components() {
  useEffect(() => {
    document.documentElement.style.setProperty("--focus", "tomato");
  }, []);
  return (
    <Page>
      <Container>
        <Box>
          <Cube />
        </Box>
        <Box>
          <HeadingPage>Components</HeadingPage>
        </Box>
        <Box>
          <Heading>Modal</Heading>
        </Box>
        <Box>
          <Paragraph>How appropriate to document a modal in a modal.</Paragraph>
        </Box>
        <Box>
          <Modal>
            <Heading>Modal title</Heading>
            <Paragraph>Modal {" .".repeat(2000)} content.</Paragraph>
            <Modal>
              <Heading>Nested modal title</Heading>
              <Paragraph>Modal {" .".repeat(2000)} content.</Paragraph>
            </Modal>
          </Modal>
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
        <Box>
          <Cube />
          <Hyperboloid />
          <Octohedron />
        </Box>
      </Container>
    </Page>
  );
}

import { Box } from "../components/Box";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";

export function Components() {
  return (
    <>
      <Container>
        <Box>
          <PageHeading>Components</PageHeading>
        </Box>
        <section id="what">
          <Box>
            <Heading>...</Heading>
          </Box>
          <Box>
            <Paragraph first last>
              Component examples go here.
            </Paragraph>
          </Box>
        </section>
      </Container>
    </>
  );
}

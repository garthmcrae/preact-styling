import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Heading } from "../components/Heading";
import { Page } from "../components/Page";
import { HeadingPage } from "../components/HeadingPage";
import { Paragraph } from "../components/Paragraph";

import atMediaMinWidthString from "../utilities/atMediaMinWidth.ts?raw";
import headingString from "../components/Heading.tsx?raw";
import useWindowInnerWidthString from "../hooks/useWindowInnerWidth.ts?raw";
import windowInnerWidthContextString from "../contexts/WindowInnerWidthContext.tsx?raw";

export function Styling() {
  return (
    <Page>
      <Container>
        <Box>
          <HeadingPage>Styling</HeadingPage>
        </Box>
        <Box>
          <Paragraph first>
            The style property has limitations, including media queries, access
            to pseudo classes, and targeting pseudo or descendant elements.
            However, when working in TSX, we can apply styles to any required
            nodes, making descendant elements less of an issue. Pseudo classes
            are generally handled by browser defaults, and modifying or removing
            them can negatively impact accessibility. Our focus then remains on
            solving media queries.
          </Paragraph>
          <Paragraph last>
            Also worth noting that the objective isn't to completely remove the
            need for styling. Some global styles and keyframe animations are
            included in this project in a style tag in the index HTML.
          </Paragraph>
        </Box>
        <section id="how">
          <Box>
            <Heading>The code</Heading>
          </Box>
          <Box>
            <Paragraph first last>
              A context provides the window's inner width to components.
            </Paragraph>
          </Box>
          <Box>
            <Code>{windowInnerWidthContextString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              Wrapping this in a hook to reduce number of imports required where
              consumed.
            </Paragraph>
          </Box>
          <Box>
            <Code>{useWindowInnerWidthString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              At media return an object of styles based on a defined minimum
              value.
            </Paragraph>
          </Box>
          <Box>
            <Code>{atMediaMinWidthString}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              Styles are filtered and reduced, allowing properties to be defined
              using a mobile-first approach without duplicate declarations.
            </Paragraph>
          </Box>
          <Box>
            <Code>{headingString}</Code>
          </Box>
        </section>
        <section id="...">
          <Box>
            <Heading>...</Heading>
          </Box>
          <Box>
            <Paragraph first>
              Just a section to cover any other observations and notes.
            </Paragraph>
            <Paragraph last>
              When authoring styles, avoid nesting properties within a single
              object. While it might seem convenient to name object properties
              freely, keep in mind that the resulting bundle will only minify
              the name of the object itself, not any of its nested properties.
              This behavior can lead to a larger built file, as observed in this
              project using Vite.
            </Paragraph>
          </Box>
          <Box>
            <Code>{`
// DO THIS
const elementStyles: CSSProperties = {
  padding: 16,
};

// NOT THIS
const styles: CSSProperties = {
  elementStyles: {
    padding: 16,
  },
};
            `}</Code>
          </Box>
          <Box>
            <Paragraph first last>
              Consistent sort orders make it easier for compression. Editors
              have formatting to sort selections in ascending order which makes
              this low effort.
            </Paragraph>
          </Box>
        </section>
      </Container>
    </Page>
  );
}

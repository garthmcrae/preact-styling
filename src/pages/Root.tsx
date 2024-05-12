import { useState } from "react";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { Expand } from "../components/Expand";
import { ExpandButton } from "../components/ExpandButton";
import { Heading } from "../components/Heading";
import { PageHeading } from "../components/PageHeading";
import { Paragraph } from "../components/Paragraph";
import { Sidebar } from "../components/Sidebar";

import atMediaMinWidthString from "../utilities/atMediaMinWidth.ts?raw";
import headingString from "../components/Heading.tsx?raw";
import useWindowInnerWidthString from "../hooks/useWindowInnerWidth.ts?raw";
import windowInnerWidthContextString from "../contexts/WindowInnerWidthContext.tsx?raw";

export function Root() {
  const [more, setMore] = useState<boolean>(false);
  const handleMore = () => setMore((prevMore) => !prevMore);
  return (
    <>
      <Sidebar>{["root", "what", "how", "why", "..."]}</Sidebar>
      <Container>
        <Box>
          <PageHeading>Preact styling</PageHeading>
        </Box>
        <section id="what">
          <Box>
            <Heading>What</Heading>
          </Box>
          <Box>
            <Paragraph first last>
              This exercise explores achievable styling in React without using
              CSS in JS libraries.
            </Paragraph>
          </Box>
          <Box>
            <ExpandButton expand={more} onClick={handleMore} />
          </Box>
          <Expand expand={more}>
            <Box>
              <Paragraph first last>
                The style property has limitations, including media queries,
                access to pseudo classes, and targeting pseudo or descendant
                elements. However, when working in TSX, we can apply styles to
                any required nodes, making descendant elements less of an issue.
                Pseudo classes are generally handled by browser defaults, and
                modifying or removing them can negatively impact accessibility.
                Our focus then remains on solving media queries.
              </Paragraph>
            </Box>
          </Expand>
        </section>
        <section id="how">
          <Box>
            <Heading>How</Heading>
          </Box>
          <Box>
            <Paragraph first last>
              Firstly we use a context to provide the window's inner width to
              components.
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
        <section id="why">
          <Box>
            <Heading>Why</Heading>
          </Box>
          <Box>
            <Paragraph first last>
              To explore how to reduce the number of dependencies required for
              styling and have a working example to review the feasibility of
              this as a solution.
            </Paragraph>
          </Box>
        </section>
        <section id="...">
          <Box>
            <Heading>...</Heading>
          </Box>
          <Box>
            <Paragraph first last>
              Just a section to cover any other observations and notes.
            </Paragraph>
          </Box>
          <Box>
            <Paragraph first last>
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
const myElement: CSSProperties = {
  padding: 16,
};

// NOT THIS
const myStyles: CSSProperties = {
  myElement: {
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
    </>
  );
}

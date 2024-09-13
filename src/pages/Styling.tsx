import { useEffect } from "react";
import { Components } from "../cards/Components";
import { Thoughts } from "../cards/Thoughts";
import { Root } from "../cards/Root";
import { Box } from "../components/Box";
import { Code } from "../components/Code";
import { Container } from "../components/Container";
import { FlexContainer } from "../components/FlexContainer";
import { FlexItem } from "../components/FlexItem";
import { Heading } from "../components/Heading";
import { HeadingPage } from "../components/HeadingPage";
import { Label } from "../components/Label";
import { Octohedron } from "../graphics/Octohedron";
import { Page } from "../components/Page";
import { Paragraph } from "../components/Paragraph";

import atMediaMinWidthRaw from "../utilities/atMediaMinWidth.ts?raw";
import flexContainerRaw from "../components/FlexContainer.tsx?raw";
import headingRaw from "../components/Heading.tsx?raw";
import windowInnerWidthContextRaw from "../contexts/WindowInnerWidthContext.tsx?raw";
import useWindowInnerWidthRaw from "../hooks/useWindowInnerWidth.ts?raw";

export function Styling() {
  useEffect(() => {
    document.documentElement.style.setProperty("--focus", "magenta");
  }, []);
  return (
    <Page>
      <Container>
        <Box>
          <Octohedron />
        </Box>
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
        <Box>
          <Heading>How</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            A context provides the window's inner width to components.
          </Paragraph>
        </Box>
        <Box>
          <Label>WindowInnerWidthContext.tsx</Label>
          <Code>{windowInnerWidthContextRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Wrapping this in a hook to reduce number of imports required where
            consumed.
          </Paragraph>
        </Box>
        <Box>
          <Label>useWindowInnerWidth.ts</Label>
          <Code>{useWindowInnerWidthRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            At media return an object of styles based on a defined minimum
            value.
          </Paragraph>
        </Box>
        <Box>
          <Label>atMediaMinWidth.ts</Label>
          <Code>{atMediaMinWidthRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Styles are filtered and reduced, allowing properties to be defined
            using a mobile-first approach without duplicate declarations.
          </Paragraph>
        </Box>
        <Box>
          <Label>Heading.tsx</Label>
          <Code>{headingRaw}</Code>
        </Box>
        <Box>
          <Paragraph first last>
            Breakpoints can also be exposed as a property so you can pass in the
            minimum width you want a component to respond on a case by case
            basis.
          </Paragraph>
        </Box>
        <Box>
          <Label>FlexContainer.tsx</Label>
          <Code>{flexContainerRaw}</Code>
        </Box>
        <Box>
          <Heading>Notes</Heading>
        </Box>
        <Box>
          <Paragraph first last>
            When authoring styles, avoid nesting properties within a single
            object. While it might seem convenient to name object properties
            freely, keep in mind that the resulting bundle will only minify the
            name of the object itself, not any of its nested properties. This
            can lead to a larger built file, as observed in this project.
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
            Consistent sort orders make it easier for built files to be
            compressed. Editors have formatting to sort selections in ascending
            order which makes this low effort.
          </Paragraph>
        </Box>
        <Box>
          <Heading>Articles</Heading>
        </Box>
        <Box>
          <FlexContainer breakpoint={768}>
            <FlexItem>
              <Components />
            </FlexItem>
            <FlexItem>
              <Thoughts />
            </FlexItem>
            <FlexItem>
              <Root />
            </FlexItem>
          </FlexContainer>
        </Box>
      </Container>
    </Page>
  );
}

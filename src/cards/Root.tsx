import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Paragraph } from "../components/Paragraph";
import { Cube } from "../graphics/Cube";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Root = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/" onClick={goToPathname}>
      <div style={{ marginBottom: 16 }}>
        <Cube />
      </div>
      <Label element="h3">/</Label>
      <Paragraph first last>
        The start page.
      </Paragraph>
    </Card>
  );
};

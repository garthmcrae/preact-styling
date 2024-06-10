import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Paragraph } from "../components/Paragraph";
import { Cube } from "../graphics/Cube";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Components = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/components/" onClick={goToPathname}>
      <div style={{ marginBottom: 16 }}>
        <Cube />
      </div>
      <Label element="h3"> Components </Label>
      <Paragraph first last>
        What this looks like in practice.
      </Paragraph>
    </Card>
  );
};

import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Paragraph } from "../components/Paragraph";
import { Void } from "../graphics/Void";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Components = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/components/" onClick={goToPathname}>
      <div style={{ marginBottom: 16 }}>
        <Void />
      </div>
      <Label element="h3">/components/</Label>
      <Paragraph first last>
        What this looks like in practice.
      </Paragraph>
    </Card>
  );
};

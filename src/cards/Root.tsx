import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Paragraph } from "../components/Paragraph";
import { Void } from "../graphics/Void";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Root = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/" onClick={goToPathname}>
      <div style={{ marginBottom: 16 }}>
        <Void />
      </div>
      <Label element="h3">/</Label>
      <Paragraph first last>
        The start page.
      </Paragraph>
    </Card>
  );
};

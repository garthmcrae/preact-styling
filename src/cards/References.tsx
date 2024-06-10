import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Paragraph } from "../components/Paragraph";
import { Plane } from "../graphics/Plane";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const References = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/references/" onClick={goToPathname}>
      <div style={{ marginBottom: 16 }}>
        <Plane />
      </div>
      <Label element="h3">References</Label>
      <Paragraph first last>
        Further reading.
      </Paragraph>
    </Card>
  );
};

import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Paragraph } from "../components/Paragraph";
import { Plane } from "../graphics/Plane";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Thoughts = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/thoughts/" onClick={goToPathname}>
      <div style={{ marginBottom: 16 }}>
        <Plane />
      </div>
      <Label element="h3">Thoughts</Label>
      <Paragraph first last>
        Further reading.
      </Paragraph>
    </Card>
  );
};

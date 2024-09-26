import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Paragraph } from "../components/Paragraph";
import { Hyperboloid } from "../graphics/Hyperboloid";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Routing = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/routing/" onClick={goToPathname}>
      <div style={{ marginBottom: 16 }}>
        <Hyperboloid />
      </div>
      <Label element="h3">/routing/</Label>
      <Paragraph first last>
        The rendering of different routes and navigation between them.
      </Paragraph>
    </Card>
  );
};

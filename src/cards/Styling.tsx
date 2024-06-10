import { Card } from "../components/Card";
import { Label } from "../components/Label";
import { Paragraph } from "../components/Paragraph";
import { Octohedron } from "../graphics/Octohedron";
import { useGoToPathname } from "../hooks/useGoToPathname";

export const Styling = () => {
  const goToPathname = useGoToPathname();
  return (
    <Card href="/styling/" onClick={goToPathname}>
      <div style={{ marginBottom: 16 }}>
        <Octohedron />
      </div>
      <Label element="h3">Styling</Label>
      <Paragraph first last>
        The handling of styles and responsive behaviour.
      </Paragraph>
    </Card>
  );
};

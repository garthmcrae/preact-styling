import { Layout } from "./components/Layout";
import { Route } from "./components/Route";
import { Components } from "./pages/Components";
import { Observations } from "./pages/Observations";
import { References } from "./pages/References";
import { Root } from "./pages/Root";
import { Routing } from "./pages/Routing";
import { Styling } from "./pages/Styling";

export function App() {
  return (
    <Layout>
      <Route children={<Root />} pathname="/" />
      <Route children={<Styling />} pathname="/styling" />
      <Route children={<Routing />} pathname="/routing" />
      <Route children={<Observations />} pathname="/observations" />
      <Route children={<References />} pathname="/references" />
      <Route children={<Components />} pathname="/components" />
    </Layout>
  );
}

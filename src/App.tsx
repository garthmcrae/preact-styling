import { Layout } from "./components/Layout";
import { Route } from "./components/Route";
import { Components } from "./pages/Components";
import { Root } from "./pages/Root";

export function App() {
  return (
    <Layout>
      <Route children={<Root />} pathname="/" />
      <Route children={<Components />} pathname="/components" />
    </Layout>
  );
}

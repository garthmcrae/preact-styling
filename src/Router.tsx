import { Routes } from "./components/Routes";

import { Components } from "./pages/Components";
import { NotFound } from "./pages/NotFound";
import { References } from "./pages/References";
import { Root } from "./pages/Root";
import { Routing } from "./pages/Routing";
import { Styling } from "./pages/Styling";

export function Router() {
  return (
    <Routes>
      {{
        "/": <Root />,
        "/components": <Components />,
        "/not-found": <NotFound />,
        "/references": <References />,
        "/routing": <Routing />,
        "/styling": <Styling />,
      }}
    </Routes>
  );
}

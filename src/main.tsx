import { render } from "preact";
import { App } from "./App.tsx";
import { WindowInnerWidthContextProvider } from "./contexts/WindowInnerWidthContext";
import { WindowLocationPathnameContextProvider } from "./contexts/WindowLocationPathnameContext";

render(
  <WindowLocationPathnameContextProvider>
    <WindowInnerWidthContextProvider>
      <App />
    </WindowInnerWidthContextProvider>
  </WindowLocationPathnameContextProvider>,
  document.getElementById("root")!
);

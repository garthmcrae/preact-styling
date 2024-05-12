import { render } from "preact";
import { App } from "./App.tsx";
import { WindowInnerWidthContextProvider } from "./contexts/WindowInnerWidthContext";

render(
  <WindowInnerWidthContextProvider>
    <App />
  </WindowInnerWidthContextProvider>,
  document.getElementById("app")!
);

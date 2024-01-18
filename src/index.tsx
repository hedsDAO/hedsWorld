import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ChakraWrapper from "@/components/wrappers/ChakraWrapper";
import { Provider as RematchProvider } from "react-redux";
import { store } from "@/store/store";

import App from "@/App";

import "@fontsource-variable/lora";
import "@fontsource-variable/open-sans";
import "@fontsource/space-mono";
import "@fontsource/inter";
import "@fontsource/poppins";
import "@fontsource/karla";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RematchProvider store={store}>
        <ChakraWrapper>
          <App />
        </ChakraWrapper>
      </RematchProvider>
    </BrowserRouter>
  </React.StrictMode>
);

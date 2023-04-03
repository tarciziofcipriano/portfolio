import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeModeProvider } from "./context/ThemeModeContext";
import { ToastProvider } from "./context/ToastContext";
import Layout from "./Layout";
import Router from "./routes";

import "./translations";
import { MenuOptionProvider } from "./context/MenuOptionContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ToastProvider>
      <BrowserRouter>
        <ThemeModeProvider>
          <MenuOptionProvider>
            <Layout>
              <Router />
            </Layout>
          </MenuOptionProvider>
        </ThemeModeProvider>
      </BrowserRouter>
    </ToastProvider>
  </React.StrictMode>
);

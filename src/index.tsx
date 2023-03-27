import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeModeProvider } from "./context/ThemeModeContext";
import Layout from "./Layout";
import Router from "./routes";

import "./translations";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeModeProvider>
        <Layout>
          <Router />
        </Layout>
      </ThemeModeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

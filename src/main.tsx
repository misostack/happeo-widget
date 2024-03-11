import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.tsx";
import { I18nextProvider } from "react-i18next";
import i18nAdapter from "./i18n/i18n-adapter.ts";
import "./global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18nAdapter}>
      <RouterProvider router={router} />
    </I18nextProvider>
  </React.StrictMode>
);

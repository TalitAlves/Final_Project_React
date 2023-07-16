import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

import App from "./components/App"; //components
import { ApiContextProvider } from "./contexts/api";
import { FavoritesProvider } from "./contexts/favorites";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ApiContextProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ApiContextProvider>
  </BrowserRouter>
);

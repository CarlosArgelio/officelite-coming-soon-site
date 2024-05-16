import React from "react";
import { useRoutes, HashRouter } from "react-router-dom";
import { routes } from "./Routes";
import { Header, Footer } from "./Components";

const AppRoutes = () => {
  return useRoutes(routes);
};

export const App = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <Header />
        <AppRoutes />
        <Footer />
      </HashRouter>
    </React.StrictMode>
  );
};

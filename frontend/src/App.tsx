import React from "react";
import { useRoutes, HashRouter } from "react-router-dom";
import { routes } from "./Routes";

const AppRoutes = () => {
  return useRoutes(routes);
};

export const App = () => {
  return (
    <React.StrictMode>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </React.StrictMode>
  );
};

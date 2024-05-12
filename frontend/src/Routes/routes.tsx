import { Home, SignUp, NotFound } from "../Pages";

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
];

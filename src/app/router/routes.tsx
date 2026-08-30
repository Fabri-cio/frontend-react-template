import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../layouts/AppLayout";

import HomePage from "../../features/home/HomePage";
import AboutPage from "../../features/about/AboutPage";
import NotFoundPage from "../../features/not-found/NotFoundPage";
import ComponentesPage from "../../features/componentes/ComponentesPage";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/componentes",
        element: <ComponentesPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import HomePage from "../../features/home/HomePage";
import NotFoundPage from "../../features/not-found/NotFoundPage";
import AboutPage from "../../features/about/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AppLayout>
        <HomePage />
      </AppLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <AppLayout>
        <AboutPage />
      </AppLayout>
    ),
  },
  {
    path: "*",
    element: (
      <AppLayout>
        <NotFoundPage />
      </AppLayout>
    ),
  },
]);

export default router;

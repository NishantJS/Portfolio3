import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

const Root = lazy(() => import("./pages/Root"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);
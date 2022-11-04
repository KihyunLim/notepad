import * as React from "react";
import { createBrowserRouter } from "react-router-dom";

import { App } from "../pages/App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // {
      //   errorElement: <ErrorPage />,
      //   children: [
      //     { index: true, element: <Index /> },
      //     {
      //       path: "contacts/:contactId",
      //       element: <Contact />,
      //       loader: contactLoader,
      //       action: contactAction,
      //     },
      //     {
      //       path: "contacts/:contactId/edit",
      //       element: <EditContact />,
      //       loader: contactLoader,
      //       action: editAction,
      //     },
      //     {
      //       path: "contacts/:contactId/destroy",
      //       action: destroyAction,
      //     },
      //   ]
      // },
    ],
  },
]);

export default router;
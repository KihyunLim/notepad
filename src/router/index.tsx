import * as React from "react";
import { 
  createBrowserRouter,
} from "react-router-dom";

import { App } from "../pages/App";
import { NoteList } from "../pages/NoteList";
import { NoteWrite } from "../pages/NoteWrite";
import { NoteDetail } from "../pages/NoteDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <NoteList />,
      },
      {
        path: "write",
        element: <NoteWrite />,
      },
      {
        path: "detail",
        element: <NoteDetail />,
      },
    ],
  },
]);

export default router;
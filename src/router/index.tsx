import * as React from "react";
import { 
  createBrowserRouter,
} from "react-router-dom";

import { App } from "@/src/pages/App";
import { NoteList } from "@/src/pages/NoteList";
import { NoteWrite } from "@/src/pages/NoteWrite";
import { NoteDetail } from "@/src/pages/NoteDetail";

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
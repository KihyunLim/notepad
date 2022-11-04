import * as React from "react";

import { NoteSpine } from "./NoteSpine";
import { Note } from "./Note";
import { DimLayer } from "./popup/DimLayer";

// export interface AppLayoutProps { compiler: string; framework: string; }
// export const AppLayout = (props: AppLayoutProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export const AppLayout = () => {
  return (
    <>
      <NoteSpine />
      <Note />

      {/* popup */}
      <DimLayer />
    </>
  );
};
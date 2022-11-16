import * as React from "react";

import { Spinner } from "./Spinner";
import { PopupAuth } from "./PopupAuth";
import { PopupBookmark } from "./PopupBookmark";

export const DimLayer = () => {
  return (
    <div className="dim-layer" id="dim">
      <Spinner />
      <PopupAuth />
      <PopupBookmark />
    </div>
  );
};
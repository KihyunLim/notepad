import React, { useState, useEffect }  from "react";
import { useNotepadState } from '@/src/contextApi/ContextApiProvider';

import { Spinner } from "./Spinner";
import { PopupAuth } from "./PopupAuth";
import { PopupBookmark } from "./PopupBookmark";

export const DimLayer = () => {
  const notepadState = useNotepadState();
  const [showPopup, setShowPopup] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showPopupAuth, setShowPopupAuth] = useState(false);
  const [showPopupBookmark, setShowPopupBookmark] = useState(false);

  useEffect(() => {
    const { showPopupAuth, showPopupBookmark } = notepadState.showPopup;

    if (showPopupAuth) {
      setShowPopup(true);
      setShowPopupAuth(true);
    } else if (showPopupBookmark) {
      setShowPopup(true);
      setShowPopupBookmark(true);
    } else {
      setShowPopup(false);
      setShowPopupAuth(false);
    }
  }, [notepadState.showPopup]);
  
  return (
    <div className={`dim-layer ${showPopup ? 'dimmed' : ''}`}>
      {showSpinner && <Spinner />}
      {showPopupAuth && <PopupAuth />}
      {showPopupBookmark && <PopupBookmark />}
    </div>
  );
};
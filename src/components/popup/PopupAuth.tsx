import * as React from "react";
import { useNotepadDispatch } from "@/src/contextApi/ContextApiProvider";
import { EActionType } from '@/src/typeDefinition';

export const PopupAuth = () => {
  const dispatch = useNotepadDispatch();
  const closePopup = () => {
    dispatch({ type: EActionType.TOGGLE_POPUP_AUTH });
  }

  return (
    <div className="popup popup__type--auth">
      <div className="popup__header">
        <div className="popup__title">Are you lkh?</div>
        <div className="popup__close closePopup" onClick={closePopup}></div>
      </div>
      <div className="popup__body">
        <input type="password" className="popup__password" placeholder="비밀번호를 입력해주세요." />
      </div>
      <div className="popup__footer">
        <button type="button" className="buttonOk">확인</button>
      </div>
    </div>
  );
};
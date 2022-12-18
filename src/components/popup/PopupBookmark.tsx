import React, { useState } from "react";
import { useNotepadDispatch } from "@/src/contextApi/ContextApiProvider";
import { EActionType } from '@/src/typeDefinition';

export const PopupBookmark = () => {
  const dispatch = useNotepadDispatch();
  const closePopup = () => {
    dispatch({ type: EActionType.TOGGLE_POPUP_BOOKMARK });
  }

  return (
    <div className="popup popup_type--bookmark">
      <div className="popup__header">
        <div className="popup__title">Change bookmark order</div>
        <div className="popup__close closePopup" onClick={closePopup}></div>
      </div>
      <div className="popup__body">
        {/* <div className="bookmark__list">   북마크 읽어다가 렌더 시키고
          <div className="bookmark__item bookmarkItem">
            <div className="bookmark__color palette__color--deep-red"></div>  팔레트 팝업 추가 시키고
            <input type="text" className="bookmark__name__type--exist" />
            <div className="bookmark__order"></div>
            <div className="bookmark__delete"></div>
          </div>
        </div> */}
        <hr />
        <div className="bookmark__item bookmarkItem">
          <div className="bookmark__color palette__color--deep-red"></div>{/* 팔레트 팝업 추가 시키고 */}
          <input type="text" className="bookmark__name__type--add" placeholder="북마크 명을 입력해주세요." />
          <div className="bookmark__add"></div>
        </div>
      </div>
      <div className="popup__footer">
        <button type="button" className="buttonOk">확인</button>
      </div>
    </div>
  );
};
import * as React from "react";

export const PopupBookmark = () => {
  return (
    <div className="popup popup_type--bookmark hide" id="popupBookmark">
      <div className="popup__header">
        <div className="popup__title">Change bookmark order</div>
        <div className="popup__close closePopup"></div>
      </div>
      <div className="popup__body">
        <div className="bookmark__list">
          <div className="bookmark__item bookmarkItem">
            <div className="bookmark__color selectedColor palette__color--deep-red"></div>
            <input type="text" className="bookmark__name__type--exist" />
            <div className="bookmark__order"></div>
            <div className="bookmark__delete"></div>
          </div>
        </div>
        <hr />
        <div className="bookmark__item bookmarkItem">
          <div className="bookmark__color selectedColor palette__color--deep-red"></div>
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
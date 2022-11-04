import * as React from "react";

export const PopupAuth = () => {
  return (
    <div className="popup popup__type--auth hide" id="popupAuth">
      <div className="popup__header">
        <div className="popup__title">Are you lkh?</div>
        <div className="popup__close closePopup"></div>
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
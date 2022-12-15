import React, { useState } from "react";
import { useNotepadDispatch } from "@/src/contextApi/ContextApiProvider";
import { EActionType } from '@/src/typeDefinition';
import { awsAmplify } from "@/src/util/aws";

export const PopupAuth = () => {
  const [password, setPassword] = useState('');
  const dispatch = useNotepadDispatch();
  const closePopup = () => {
    dispatch({ type: EActionType.TOGGLE_POPUP_AUTH });
  }
  const inputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }
  const requestSignin = async () => {
    try {
      await awsAmplify.signin((process.env.COGNITO_USER_EMAIL as string) , password);
    } catch(error) {
      console.error(error);
    }
  }

  return (
    <div className="popup popup__type--auth">
      <div className="popup__header">
        <div className="popup__title">Are you lkh?</div>
        <div className="popup__close closePopup" onClick={closePopup}></div>
      </div>
      <div className="popup__body">
        <input 
          type="password" 
          className="popup__password" 
          placeholder="비밀번호를 입력해주세요." 
          onChange={inputPassword}
          value={password}
        />
      </div>
      <div className="popup__footer">
        <button type="button" className="buttonOk" onClick={requestSignin}>확인</button>
      </div>
    </div>
  );
};
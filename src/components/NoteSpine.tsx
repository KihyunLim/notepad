import React, { useState, useEffect }  from "react";
import { NavLink } from "react-router-dom";
import { useNotepadDispatch } from "@/src/contextApi/ContextApiProvider";
import { EActionType } from '@/src/typeDefinition';

export const NoteSpine = () => {
  const dispatch = useNotepadDispatch();
  const [buttonWrite, setButtonWrite] = useState(true);
  const [buttonSave, setButtonSave] = useState(false);
  const [buttonDelete, setButtonDelete] = useState(false);
  const [buttonMenu, setButtonMenu] = useState(false);
  const [buttonClose, setButtonClose] = useState(false);
  const [buttonMenuList1, setButtonMenuList1] = useState(false);
  const [buttonMenuLIst2, setButtonMenuLIst2] = useState(false);
  const setButtonDisplay = () => {
    const elementBody = document.querySelector('body') as HTMLBodyElement;
    const displayWidth = elementBody.getBoundingClientRect().width;

    // 라우트 경로에 따라 버튼 추가 조절 필요
    console.log('display width : ', displayWidth);
    if (displayWidth > 800) {
      setButtonWrite(true);
      setButtonSave(false);
      setButtonDelete(false);
      setButtonMenu(false);
      setButtonClose(false);
      setButtonMenuList1(false);
      setButtonMenuLIst2(false);
    } else {
      setButtonWrite(false);
      setButtonSave(false);
      setButtonDelete(false);
      setButtonMenu(true);
      setButtonClose(false);
      setButtonMenuList1(false);
      setButtonMenuLIst2(false);
    }
  }
  const showPopup = () => {
    dispatch({ type: EActionType.TOGGLE_POPUP_AUTH });
  }

  useEffect(() => {
    setButtonDisplay();
    window.addEventListener('resize', setButtonDisplay);

    return () => {
      window.removeEventListener('resize', setButtonDisplay);
    }
  }, []);

  return (
    <header className="note-spine">
      <div className="note-spine__side">
        <div className="svg svg-gear-solid" onClick={showPopup}><span>설정</span></div>
      </div>
      <div className="note-spine__title" id="title">lkh's notepad</div>
      <div className="note-spine__side note-spine__side__right">
        { buttonWrite && <NavLink to="write"><div className="svg svg-pen-to-square-solid moveWriteNote"><span>작성</span></div></NavLink> }
        { buttonSave && <div className="svg svg-floppy-disk-solid" id="saveNote"><span>저장</span></div> }
        { buttonDelete && <div className="svg svg-trash-can-solid-white"><span>삭제</span></div> }
        { buttonMenu && <div className="svg svg-bars-solid" id="showMenu"><span>메뉴</span></div> }
        { buttonClose && <div className="svg svg-xmark-solid-white" id="closeMenu"><span>닫기</span></div> }
        { buttonMenuList1 && (
          <div className="menu-list menu-list__type--menu" id="menuMain">
            <NavLink to="write"><div className="menu moveWriteNote">
              <div className="svg svg-pen-to-square-solid"><span>작성</span></div>
              <div className="menu__name">새 노트</div>
            </div></NavLink>
            <div className="menu" id="showBookmarkList">
              <div className="svg svg-bookmark-solid"><span>북마크</span></div>
              <div className="menu__name">북마크</div>
            </div>
          </div>
        ) }
        { buttonMenuLIst2 && (
          <div className="menu-list menu-list__type--bookmark" id="menuBookmark">
            <div className="bookmark bookmark__color--red">선택 아님sssssssssssssssssssssssssssssssssssssssss</div>
            <div className="bookmark bookmark__color--blue bookmark__selected">선택!!sssssssssssssssssssssssssssssssssssssssssssssssssss</div>
            <div className="bookmark bookmark__color--green">선택 아님2</div>
          </div>
        ) }
      </div>
    </header>
  );
};
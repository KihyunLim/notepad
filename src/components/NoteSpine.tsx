import * as React from "react";
import { NavLink } from "react-router-dom";
import { customAxois as axios } from "@/src/util/axios";

export const NoteSpine = () => {
  const testFunc = async () => {
    const response = await axios.get('/note-list');
    console.log(response);
  };

  return (
    <header className="note-spine">
      <div className="note-spine__side">
        <div className="svg svg-gear-solid" id="showPopupSetting"><span>설정</span></div>
      </div>
      <div className="note-spine__title" id="title" onClick={testFunc}>lkh's notepad</div>
      <div className="note-spine__side note-spine__side__right">
        <NavLink to="write"><div className="svg svg-pen-to-square-solid wide-screen moveWriteNote"><span>작성</span></div></NavLink>
        <div className="svg svg-floppy-disk-solid" id="saveNote"><span>저장</span></div>
        <div className="svg svg-trash-can-solid-white wide-screen"><span>삭제</span></div>
        <div className="svg svg-bars-solid" id="showMenu"><span>메뉴</span></div>
        <div className="svg svg-xmark-solid-white" id="hideMenu"><span>닫기</span></div>
        <div className="menu-list menu-list__type--menu hide" id="menuMain">
          <NavLink to="write"><div className="menu moveWriteNote">
            <div className="svg svg-pen-to-square-solid"><span>작성</span></div>
            <div className="menu__name">새 노트</div>
          </div></NavLink>
          <div className="menu" id="showBookmarkList">
            <div className="svg svg-bookmark-solid"><span>북마크</span></div>
            <div className="menu__name">북마크</div>
          </div>
        </div>
        <div className="menu-list menu-list__type--bookmark hide" id="menuBookmark">
          <div className="bookmark bookmark__color--red">선택 아님sssssssssssssssssssssssssssssssssssssssss</div>
          <div className="bookmark bookmark__color--blue bookmark__selected">선택!!sssssssssssssssssssssssssssssssssssssssssssssssssss</div>
          <div className="bookmark bookmark__color--green">선택 아님2</div>
        </div>
      </div>
    </header>
  );
};
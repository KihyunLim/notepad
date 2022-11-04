import * as React from "react";

export const NoteSpine = () => {
  return (
    <header className="note-spine">
      <div className="note-spine__side">
        <img src="/static/img/icon/gear-solid.svg" alt="" className="svg" id="showPopupSetting" />
      </div>
      <div className="note-spine__title" id="title">lkh's notepad</div>
      <div className="note-spine__side note-spine__side__right">
        <img src="/static/img/icon/pen-to-square-solid.svg" alt="작성" className="svg wide-screen moveWriteNote" />
        <img src="/static/img/icon/floppy-disk-solid.svg" alt="저장" className="svg" id="saveNote" />
        <img src="/static/img/icon/trash-can-solid-white.svg" alt="삭제" className="svg wide-screen" id="deleteNote" />
        <img src="/static/img/icon/bars-solid.svg" alt="메뉴" className="svg" id="showMenu" />
        <img src="/static/img/icon/xmark-solid-white.svg" alt="닫기" className="svg" id="hideMenu" />
        <div className="menu-list menu-list__type--menu hide" id="menuMain">
          <div className="menu moveWriteNote">
            <img src="/static/img/icon/pen-to-square-solid.svg" alt="작성" className="svg" />
            <div className="menu__name">새 노트</div>
          </div>
          <div className="menu" id="showBookmarkList">
            <img src="/static/img/icon/bookmark-solid.svg" alt="북마크" className="svg" />
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
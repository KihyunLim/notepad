import * as React from "react";

export const NoteSpine = () => {
  return (
    <header className="note-spine">
      <div className="note-spine__side">
        <div className="svg svg-gear-solid" id="showPopupSetting"><span>설정</span></div>
      </div>
      <div className="note-spine__title" id="title">lkh's notepad</div>
      <div className="note-spine__side note-spine__side__right">
        <div className="svg svg-pen-to-square-solid wide-screen moveWriteNote"><span>작성</span></div>
        <div className="svg svg-floppy-disk-solid" id="saveNote"><span>저장</span></div>
        <div className="svg svg-trash-can-solid-white wide-screen"><span>삭제</span></div>
        <div className="svg svg-bars-solid" id="showMenu"><span>메뉴</span></div>
        <div className="svg svg-xmark-solid-white" id="hideMenu"><span>닫기</span></div>
        <div className="menu-list menu-list__type--menu hide" id="menuMain">
          <div className="menu moveWriteNote">
            <div className="svg svg-pen-to-square-solid"><span>작성</span></div>
            <div className="menu__name">새 노트</div>
          </div>
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
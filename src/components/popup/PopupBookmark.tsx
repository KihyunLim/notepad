import React, { useState, useEffect } from "react";
import { useNotepadState, useNotepadDispatch } from "@/src/contextApi/ContextApiProvider";
import { TBookmarkList, EActionType, IPalette } from '@/src/typeDefinition';

import { Palette } from './Palette';

export const PopupBookmark = () => {
  const notepadState = useNotepadState();
  const dispatch = useNotepadDispatch();
  const [bookmarkList, setBookmarkList] = useState<TBookmarkList>([]);
  const [palette, setPalette] = useState<IPalette>({});
  const closePopup = () => {
    dispatch({ type: EActionType.TOGGLE_POPUP_BOOKMARK });
  }
  const showPalette = (key:number | string, e:React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    setPalette({ 
      ...palette, 
      [key]: {
        show: true,
        top: target.getBoundingClientRect().top + 40,
        left: target.getBoundingClientRect().left,
      } 
    });
  }

  useEffect(() => {
    console.log('detect change bookmark list : ', notepadState);
    setBookmarkList(notepadState.bookmarkList);

    const tempPalette:IPalette = { '-1': { show: false, top: 0, left: 0, } };
    bookmarkList.forEach((v, i) => {
      tempPalette[i] = { show: false, top: 0, left: 0, };
    });
    setPalette(tempPalette);
  }, [notepadState.bookmarkList]);

  return (
    <div className="popup popup_type--bookmark">
      <div className="popup__header">
        <div className="popup__title">Change bookmark order</div>
        <div className="popup__close closePopup" onClick={closePopup}></div>
      </div>
      <div className="popup__body">
        <div className="bookmark__list">
        {bookmarkList.map((bookmark, i) => (
          <div className="bookmark__item bookmarkItem">
            <div className={`bookmark__color palette__color--${bookmark.color}`}></div>
            { palette[i]?.show && <Palette top={palette[i].top} left={palette[i].left} /> }
            <input type="text" className="bookmark__name__type--exist" value={bookmark.bm_name} />
            <div className="bookmark__order"></div>
            <div className="bookmark__delete"></div>
          </div>
        ))}
        </div>
        <hr />
        <div className="bookmark__item bookmarkItem">
          <div className="bookmark__color palette__color--deep-red" onClick={showPalette.bind(this, '-1')}></div>
          { palette['-1']?.show && <Palette top={palette['-1'].top} left={palette['-1'].left} /> }
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
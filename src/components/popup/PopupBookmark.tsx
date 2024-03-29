import React, { useState, useEffect, useRef } from "react";
import { useNotepadState, useNotepadDispatch } from "@/src/contextApi/ContextApiProvider";
import { TBookmarkList, EActionType, TPalette, IPaletteItem } from '@/src/typeDefinition';

import { Palette } from './Palette';

export const PopupBookmark = () => {
  const notepadState = useNotepadState();
  const dispatch = useNotepadDispatch();
  const [newPalette, setNewPalette] = useState<IPaletteItem>({
    show: false,
    top: 0,
    left: 0,
    selectedColor: '',
  });
  const [palette, setPalette] = useState<TPalette>([]);
  const [bookmarkList, setBookmarkList] = useState<TBookmarkList>([]);
  const refNewPalette = useRef<null | HTMLDivElement>(null);
  // const refPalette = useRef([]);
  const closePopup = () => {
    dispatch({ type: EActionType.TOGGLE_POPUP_BOOKMARK });
  }
  const showPalette = (indexBookmark: number | string, e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;

    if (indexBookmark === 'new') {
      setNewPalette({
        show: true,
        top: target.getBoundingClientRect().top + 40,
        left: target.getBoundingClientRect().left,
        selectedColor: '',
      });
    } else {
      const changedPalette = palette.map((item, i) => {
        if (i === indexBookmark) {
          return {
            show: true,
            top: target.getBoundingClientRect().top + 40,
            left: target.getBoundingClientRect().left,
            selectedColor: '',
          }
        } else {
          return item;
        }
      });

      setPalette(changedPalette);
    }
  }
  const closePalette = (indexPalette: number | string, selectedColor: string) => {
    console.log(indexPalette, selectedColor);
    // refNewPalette.current?.classList = 'bookmark__color ' + selectedColor;
    // setPalette({ 
    //   ...palette, 
    //   [indexPalette]: {
    //     ...palette[indexPalette],
    //     selectedColor: selectedColor,
    //   } 
    // });
  }

  useEffect(() => {
    console.log('detect change bookmark list : ', notepadState);
    setBookmarkList(notepadState.bookmarkList);

    setPalette(bookmarkList.map(() => ({
      show: false,
      top: 0,
      left: 0,
      selectedColor: '',
    })));
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
            <div 
              className={`bookmark__color palette__color--${bookmark.color}`}
              onClick={showPalette.bind(this, i)}
            ></div>
          { palette[i]?.show && (
            <Palette 
              indexPalette={i} 
              top={palette[i].top} 
              left={palette[i].left} 
              closePalette={closePalette}
            />) 
          }
            <input type="text" className="bookmark__name__type--exist" value={bookmark.bm_name} />
            <div className="bookmark__order"></div>
            <div className="bookmark__delete"></div>
          </div>
        ))}
        </div>
        <hr />
        <div className="bookmark__item bookmarkItem">
          <div 
            className="bookmark__color palette__color--deep-red" 
            onClick={showPalette.bind(this, 'new')}
            ref={refNewPalette}
          ></div>
        { newPalette?.show && (
          <Palette 
            indexPalette='new' 
            top={newPalette.top} 
            left={newPalette.left} 
            closePalette={closePalette}
          />) 
        }
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
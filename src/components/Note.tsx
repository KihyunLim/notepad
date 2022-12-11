import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { TBookmarkList } from '@/src/typeDefinition'
import { StateNotepad } from '@/src/pages/App';

export const Note = () => {
  const [bookmarkList, setBookmarkList] = useState<TBookmarkList>([]);
  const stateNotepad = useContext(StateNotepad);

  useEffect(() => {
    console.log('detect change bookmark list : ', stateNotepad);
    setBookmarkList(stateNotepad.bookmarkList);
  }, [stateNotepad.bookmarkList]);
  
  return (
    <section className="note">
      <aside className="bookmark__list">
        {bookmarkList.map((bookmark) => <div className={`bookmark bookmark__color--${bookmark.color}`}>{bookmark.bm_name}</div>)}
      </aside>
      <Outlet />
    </section>
  );
};
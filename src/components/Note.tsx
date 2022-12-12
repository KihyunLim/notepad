import React, { useContext, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { TBookmarkList } from '@/src/typeDefinition'
import { NotepadState } from '@/src/pages/App';

export const Note = () => {
  const [bookmarkList, setBookmarkList] = useState<TBookmarkList>([]);
  const notepadState = useContext(NotepadState);

  useEffect(() => {
    console.log('detect change bookmark list : ', notepadState);
    setBookmarkList(notepadState.bookmarkList);
  }, [notepadState.bookmarkList]);
  
  return (
    <section className="note">
      <aside className="bookmark__list">
        {bookmarkList.map((bookmark) => <div className={`bookmark bookmark__color--${bookmark.color}`}>{bookmark.bm_name}</div>)}
      </aside>
      <Outlet />
    </section>
  );
};
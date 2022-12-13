import React, { useContext, useState, useEffect } from "react";
import { TNoteList } from "@/src/typeDefinition";
import { useNotepadState } from '@/src/contextApi/ContextApiProvider';

import { NoteItem } from "@/src/components/NoteItem";

export const NoteList = () => {
  const [noteList, setNoteList] = useState<TNoteList>([]);
  const notepadState = useNotepadState();

  useEffect(() => {
    console.log('detect change note list : ', notepadState);
    setNoteList(notepadState.noteList);
  }, [notepadState.noteList]);

  return (
    <article className="post__grid">
      {noteList.map((note) => (<NoteItem note={note} />))}
    </article>
  );
};
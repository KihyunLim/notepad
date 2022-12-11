import React, { useContext, useState, useEffect } from "react";
import { TNoteList } from "@/src/typeDefinition";
import { StateNotepad } from './App';

import { NoteItem } from "@/src/components/NoteItem";

export const NoteList = () => {
  const [noteList, setNoteList] = useState<TNoteList>([]);
  const stateNotepad = useContext(StateNotepad);

  useEffect(() => {
    console.log('detect change note list : ', stateNotepad);
    setNoteList(stateNotepad.noteList);
  }, [stateNotepad.noteList]);

  return (
    <article className="post__grid">
      {noteList.map((note) => (<NoteItem note={note} />))}
    </article>
  );
};
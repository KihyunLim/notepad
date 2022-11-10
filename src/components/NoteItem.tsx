import * as React from "react";
import { NavLink } from "react-router-dom";

interface Note {
  title: string;
  thumbnailSrc: string;
  content: string;
  registDate: string;
}
interface NoteItemProps {
  note: Note;
}

export const NoteItem = (props: NoteItemProps) => {
  const note: any = props.note;

  return (
    <NavLink to="detail">
      <div className="post__cell">
        <div className="post">
          <div className="post__title">{note.title}</div>
          <img src={note.thumbnailSrc} alt="" className="post__thumbnail" />
          <div className="post__content">{note.content}</div>
          <div className="post__regist-date">{note.registDate}</div>
        </div>
      </div>
    </NavLink>
  );
};
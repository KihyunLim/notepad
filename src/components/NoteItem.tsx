import * as React from "react";
import { NavLink } from "react-router-dom";
import { iNote } from "@/src/type/interface";

interface NoteItemProps {
  note: iNote;
}

export const NoteItem = (props: NoteItemProps) => {
  const note: any = props.note;

  return (
    <NavLink to="detail">
      <div className="post__cell">
        <div className="post">
          <div className="post__title">{note.title}</div>
          {/* 등록에 썸네일 등록을 안만들었네;; */}
          {/* <img src={note.thumbnailSrc} alt="" className="post__thumbnail" /> */}
          <div className="post__content">{note.content}</div>
          <div className="post__regist-date">{note.registDate}</div>
        </div>
      </div>
    </NavLink>
  );
};
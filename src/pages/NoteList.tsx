import * as React from "react";
import { iNote } from "@/src/type/interface";
import { NoteItem } from "../components/NoteItem";

const noteList: iNote[] = [
  /* {
    title: '제목',
    thumbnailSrc: process.env.ASSET_PATH + '/img/sample/sample1.jpg',
    content: '내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 \r\n내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 \r\n내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 \r\n내용내뇨용 내용내뇨용 내용내뇨용',
    registDate: '2022-09-25',
  }, */
];

export const NoteList = () => {
  return (
    <article className="post__grid">
      {noteList.map((note) => (<NoteItem note={note} />))}
    </article>
  );
};
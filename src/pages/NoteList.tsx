import * as React from "react";

import { NoteItem } from "../components/NoteItem";

const noteList = [
  {
    title: '제목',
    thumbnailSrc: process.env.ASSET_PATH + '/img/sample/sample1.jpg',
    content: '내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 \r\n내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 \r\n내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 \r\n내용내뇨용 내용내뇨용 내용내뇨용',
    registDate: '2022-09-25',
  },
];

export const NoteList = () => {
  return (
    <article className="post__grid">
      {noteList.map((note) => (<NoteItem note={note} />))}
      <div className="post__cell">
        <div className="post">
          <div className="post__title">제목</div>
          <img src={require('../../public/img/sample/sample1.jpg')} alt="" className="post__thumbnail" />
          <div className="post__content">
            내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
            내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
            내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
            내용내뇨용 내용내뇨용 내용내뇨용 
          </div>
          <div className="post__regist-date">2022-09-25</div>
        </div>
      </div>
    </article>
  );
};
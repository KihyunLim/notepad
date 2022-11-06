import * as React from "react";
import { Outlet } from "react-router-dom";

export const Note = () => {
  return (
    <section className="note">
      <aside className="bookmark__list">
        <div className="bookmark bookmark__color--red">선택 아님sssssssssssssssssssssssssssssssssssssssss</div>
        <div className="bookmark bookmark__color--blue bookmark__selected">선택!!sssssssssssssssssssssssssssssssssssssssssssssssssss</div>
        <div className="bookmark bookmark__color--green">선택 아님2</div>
      </aside>
      <Outlet />
    </section>
  );
};
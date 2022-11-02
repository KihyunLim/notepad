import * as React from "react";

// export interface AppLayoutProps { compiler: string; framework: string; }
// export const AppLayout = (props: AppLayoutProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;

export const AppLayout = () => {
  return (
    <>
      <header className="note-spine">
        <div className="note-spine__side">
          <img src="/static/img/icon/gear-solid.svg" alt="" className="svg" id="showPopupSetting" />
        </div>
        <div className="note-spine__title" id="title">lkh's notepad</div>
        <div className="note-spine__side note-spine__side__right">
          <img src="/static/img/icon/pen-to-square-solid.svg" alt="작성" className="svg wide-screen moveWriteNote" />
          <img src="/static/img/icon/floppy-disk-solid.svg" alt="저장" className="svg" id="saveNote" />
          <img src="/static/img/icon/trash-can-solid-white.svg" alt="삭제" className="svg wide-screen" id="deleteNote" />
          <img src="/static/img/icon/bars-solid.svg" alt="메뉴" className="svg" id="showMenu" />
          <img src="/static/img/icon/xmark-solid-white.svg" alt="닫기" className="svg" id="hideMenu" />
          <div className="menu-list menu-list__type--menu hide" id="menuMain">
            <div className="menu moveWriteNote">
              <img src="/static/img/icon/pen-to-square-solid.svg" alt="작성" className="svg" />
              <div className="menu__name">새 노트</div>
            </div>
            <div className="menu" id="showBookmarkList">
              <img src="/static/img/icon/bookmark-solid.svg" alt="북마크" className="svg" />
              <div className="menu__name">북마크</div>
            </div>
          </div>
          <div className="menu-list menu-list__type--bookmark hide" id="menuBookmark">
            <div className="bookmark bookmark__color--red">선택 아님sssssssssssssssssssssssssssssssssssssssss</div>
            <div className="bookmark bookmark__color--blue bookmark__selected">선택!!sssssssssssssssssssssssssssssssssssssssssssssssssss</div>
            <div className="bookmark bookmark__color--green">선택 아님2</div>
          </div>
        </div>
      </header>
      <section className="note">
        <aside className="bookmark__list">
          <div className="bookmark bookmark__color--red">선택 아님sssssssssssssssssssssssssssssssssssssssss</div>
          <div className="bookmark bookmark__color--blue bookmark__selected">선택!!sssssssssssssssssssssssssssssssssssssssssssssssssss</div>
          <div className="bookmark bookmark__color--green">선택 아님2</div>
        </aside>
        <article className="post__grid">
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/sample1.jpg" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/sample1.jpg" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
              <div className="post__content">
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 내용내뇨용 
                내용내뇨용 내용내뇨용 내용내뇨용 
              </div>
              <div className="post__regist-date">2022-09-25</div>
            </div>
          </div>
          <div className="post__cell">
            <div className="post">
              <div className="post__title">제목</div>
              <img src="/static/img/sample/map.png" alt="" className="post__thumbnail"/*  onError="this.style.display='none';" */ />
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
      </section>

      {/* popup */}
      <div className="dim-layer" id="dim">
        <div className="spinner hide" id="loadingSpinner"></div>
        <div className="popup popup__type--auth hide" id="popupAuth">
          <div className="popup__header">
            <div className="popup__title">Are you lkh?</div>
            <div className="popup__close closePopup"></div>
          </div>
          <div className="popup__body">
            <input type="password" className="popup__password" placeholder="비밀번호를 입력해주세요." />
          </div>
          <div className="popup__footer">
            <button type="button" className="buttonOk">확인</button>
          </div>
        </div>
        <div className="popup popup_type--bookmark hide" id="popupBookmark">
          <div className="popup__header">
            <div className="popup__title">Change bookmark order</div>
            <div className="popup__close closePopup"></div>
          </div>
          <div className="popup__body">
            <div className="bookmark__list">
              <div className="bookmark__item bookmarkItem">
                <div className="bookmark__color selectedColor palette__color--deep-red"></div>
                <input type="text" className="bookmark__name__type--exist" />
                <div className="bookmark__order"></div>
                <div className="bookmark__delete"></div>
              </div>
            </div>
            <hr />
            <div className="bookmark__item bookmarkItem">
              <div className="bookmark__color selectedColor palette__color--deep-red"></div>
              <input type="text" className="bookmark__name__type--add" placeholder="북마크 명을 입력해주세요." />
              <div className="bookmark__add"></div>
            </div>
          </div>
          <div className="popup__footer">
            <button type="button" className="buttonOk">확인</button>
          </div>
        </div>
      </div>
    </>
  );
};
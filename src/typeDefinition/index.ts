export interface INote {
  title: string;
  thumbnailSrc: string;
  content: string;
  registDate: string;
}
export type TNoteList = INote[];

export interface IBookmark {
  bm_id: number;
  color: string;
  bm_name: string;
}
export type TBookmarkList = IBookmark[];

export interface INotepad {
  bookmarkList: TBookmarkList;
  noteList: TNoteList;
}
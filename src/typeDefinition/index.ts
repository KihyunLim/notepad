import { Dispatch } from 'react'

export interface INote {
  title: string;
  thumbnailSrc: string;
  content: string;
  registDate: string;
};
export type TNoteList = INote[];

export interface IBookmark {
  bm_id: number;
  color: string;
  bm_name: string;
};
export type TBookmarkList = IBookmark[];

export interface INotepadState {
  bookmarkList: TBookmarkList;
  noteList: TNoteList;
  showPopupAuth: Boolean;
};

export enum EActionType {
  LOAD_NOTE_LIST = 'LOAD_NOTE_LIST',
  LOAD_BOOKMARK_LIST = 'LOAD_BOOKMARK_LIST',
  TOGGLE_POPUP_AUTH = 'TOGGLE_POPUP_AUTH',
}

export type TNotepadAction = 
  | { type: EActionType.LOAD_NOTE_LIST, noteList: TNoteList }
  | { type: EActionType.LOAD_BOOKMARK_LIST, bookmarkList: TBookmarkList }
  | { type: EActionType.TOGGLE_POPUP_AUTH };

export type TNotepadDispatch = Dispatch<TNotepadAction>;

/* axios response */
interface IResponse {
  message: string;
};

export interface IResponse_NoteList extends IResponse {
  noteList: TNoteList;
}

export interface IResponse_BookmarkList extends IResponse {
  bookmarkList: TBookmarkList;
}
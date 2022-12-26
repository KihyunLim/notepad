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
  bm_order: number;
};
export type TBookmarkList = IBookmark[];

export interface INotepadState {
  bookmarkList: TBookmarkList;
  noteList: TNoteList;
  showPopup: {
    showPopupAuth: Boolean;
    showPopupBookmark: Boolean;
  }
  tokenInfo: ITokenInfo | null;
};

export enum EActionType {
  LOAD_NOTE_LIST = 'LOAD_NOTE_LIST',
  LOAD_BOOKMARK_LIST = 'LOAD_BOOKMARK_LIST',
  TOGGLE_POPUP_AUTH = 'TOGGLE_POPUP_AUTH',
  TOGGLE_POPUP_BOOKMARK = 'TOGGLE_POPUP_BOOKMARK',
  SET_TOKEN_INFO = 'SET_TOKEN_INFO',
}

export type TNotepadAction = 
  | { type: EActionType.LOAD_NOTE_LIST, noteList: TNoteList }
  | { type: EActionType.LOAD_BOOKMARK_LIST, bookmarkList: TBookmarkList }
  | { type: EActionType.TOGGLE_POPUP_AUTH }
  | { type: EActionType.TOGGLE_POPUP_BOOKMARK }
  | { type: EActionType.SET_TOKEN_INFO, tokenInfo: ITokenInfo | null }
;

export type TNotepadDispatch = Dispatch<TNotepadAction>;

export interface ITokenInfo {
  iat: number;
  exp: number;
  available: boolean;
}

export interface IPalette {
  [Key: number | string]: {
    show: boolean,
    top: number,
    left: number,
    selectedColor: string,
  }
}

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
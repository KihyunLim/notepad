import React, { useReducer, createContext, useContext } from "react";
import { INotepadState, TNotepadDispatch, TNotepadAction, EActionType } from '@/src/typeDefinition';

export const NotepadState = createContext<INotepadState | null>(null);
export const NotepadDispatch = createContext<TNotepadDispatch | null>(() => null);

function reducer(state: INotepadState, action: TNotepadAction): INotepadState {
  console.log('@@@@@ reducer : ', state, ' / ', action);

  switch (action.type) {
    case EActionType.LOAD_BOOKMARK_LIST: {
      return {
        ...state,
        bookmarkList: action.bookmarkList,
      };
    }
    case EActionType.LOAD_NOTE_LIST: {
      return {
        ...state,
        noteList: state.noteList.concat(action.noteList)
      };
    }
    case EActionType.TOGGLE_POPUP_AUTH: {
      return {
        ...state,
        showPopup: {
          ...state.showPopup,
          showPopupAuth: !state.showPopup.showPopupAuth
        },
      }
    }
    case EActionType.TOGGLE_POPUP_BOOKMARK: {
      return {
        ...state,
        showPopup: {
          ...state.showPopup,
          showPopupBookmark: !state.showPopup.showPopupBookmark
        },
      }
    }
    case EActionType.SET_TOKEN_INFO: {
      return {
        ...state,
        tokenInfo: action.tokenInfo,
      }
    }
    default:
      return state;
  }
}

export function ContextApiProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, ({
    bookmarkList: [],
    noteList: [],
    showPopup: {
      showPopupAuth: false,
      showPopupBookmark: false,
    },
    tokenInfo: null,
  } as INotepadState));

  return (
    <NotepadState.Provider value={state}>
      <NotepadDispatch.Provider value={dispatch}>
        {children}
      </NotepadDispatch.Provider>
    </NotepadState.Provider>
  );
}

export function useNotepadState() {
  const state = useContext(NotepadState);

  if (!state) {
    /**
     * createContext<INotepadState | null>(null);로 인해
     * 꺼내서 사용 할 때 Cannot invoke an object which is possibly 'null' 에러 방지 해 줌
     */
    throw new Error('cannot find NotepadState!!');
  }

  return state;
}

export function useNotepadDispatch() {
  const dispatch = useContext(NotepadDispatch);

  if (!dispatch) {
    /**
     * createContext<TNotepadDispatch | null>(null);로 인해
     * 꺼내서 사용 할 때 Cannot invoke an object which is possibly 'null' 에러 방지 해 줌
     */
    throw new Error('cannot find NotepadDispatch!!');
  }

  return dispatch;
}
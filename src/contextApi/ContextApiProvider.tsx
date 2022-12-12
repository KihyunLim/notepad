import React, { useReducer, createContext, useContext } from "react";
import { INotepadState, TNotepadDispatch, TNotepadAction } from '@/src/typeDefinition';

export const NotepadState = createContext<INotepadState | null>(null);
export const NotepadDispatch = createContext<TNotepadDispatch | null>(null);

function reducer(state: INotepadState, action: TNotepadAction): INotepadState {
  switch (action.type) {
    case 'LOAD_BOOKMARK_LIST': 
      return {
        ...state,
        bookmarkList: action.bookmarkList,
      };
    case 'LOAD_NOTE_LIST': 
      return {
        ...state,
        noteList: state.noteList.concat(action.noteList)
      };
    default:
      return state;
  }
}

export function ContextApiProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    bookmarkList: [],
    noteList: [],
  });

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
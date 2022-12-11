import React, { useEffect, useReducer } from "react";
import { customAxois as axios } from "@/src/util/axios";

import { INotepad } from '@/src/typeDefinition';
import { AppLayout } from '@/src/components/AppLayout';

const notepad:INotepad = {
  bookmarkList: [],
  noteList: [],
};
export const StateNotepad = React.createContext(notepad);

function reducer(state: INotepad, action: any) {
  switch (action.type) {
    case 'LOAD_BOOKMARK_LIST': 
      return {
        ...state,
        bookmarkList: action.bookmarkList
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

export const App = () => {
  const [state, dispatch] = useReducer(reducer, notepad);
  useEffect(() => {
    console.log('App.tsx loaded!!');
    // useEffect 내부에 async를 사용하기에는 자연스러워 보이지 않음
    /* const getNoteList = async () => {
      console.log('request note list!!');
      return await axios.get('/note-list');
    }
    const getBookmarkList = async () => {
      console.log('request bookmark list!!');
      return await axios.get('/bookmark-list');
    }

    const resNoteList = getNoteList().then((response) => {console.log('note done : ', response)});
    const resBookmarkList = getBookmarkList().then((response) => {console.log('bookmark done : ', response)});

    console.log('note list : ', resNoteList, ' / bookmark list : ', resBookmarkList); */

    axios.get('/note-list')
      .then(({ data }) => {
        console.log('note list done : ', data);
        dispatch({
          type: 'LOAD_NOTE_LIST',
          noteList: data.result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    axios.get('/bookmark-list')
      .then(({ data }) => {
        console.log('bookmark list done : ', data);
        dispatch({
          type: 'LOAD_BOOKMARK_LIST',
          bookmarkList: data.result,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <StateNotepad.Provider value={state}>
        <AppLayout />
      </StateNotepad.Provider>
    </>
  );
};
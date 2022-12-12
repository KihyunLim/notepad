import React, { useEffect, useReducer } from "react";
import { customAxois as axios } from "@/src/util/axios";
import { Auth } from "aws-amplify";

import { INotepadState } from '@/src/typeDefinition';
import { AppLayout } from '@/src/components/AppLayout';

const notepadState:INotepadState = {
  bookmarkList: [],
  noteList: [],
};
export const NotepadState = React.createContext(notepadState);

function reducer(state: INotepadState, action: any): INotepadState {
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
  const [state, dispatch] = useReducer(reducer, notepadState);

  useEffect(() => {
    (async () => {
      let user = null;

      try {
        user = await Auth.currentAuthenticatedUser();

        if (user) {
          console.log('authenticated user : ', user);
        } else {
          console.log('unauthenticated user!!');
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log('App.tsx loaded!!');

    axios.get('/note-list')
      .then(({ data }) => {
        console.log('note list done : ', data);
        dispatch({
          type: 'LOAD_NOTE_LIST',
          noteList: data.noteList,
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
          bookmarkList: data.bookmarkList,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <NotepadState.Provider value={state}>
        <AppLayout />
      </NotepadState.Provider>
    </>
  );
};
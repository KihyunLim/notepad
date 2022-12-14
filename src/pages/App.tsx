import React, { useEffect } from "react";
import { Auth } from "aws-amplify";
import { customAxois as axios } from "@/src/util/axios";
import { IResponse_NoteList, IResponse_BookmarkList, EActionType } from '@/src/typeDefinition';

import { ContextApiProvider, useNotepadDispatch } from "@/src/contextApi/ContextApiProvider";
import { AppLayout } from '@/src/components/AppLayout';

export const App = () => {
  const dispatch = useNotepadDispatch();

  // useEffect에서 async/await 쓰는 법
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

  // useEffect에서 then으로 사용하는 법
  useEffect(() => {
    console.log('App.tsx loaded!!');

    axios.get('/note-list')
      .then(({ data }: { data: IResponse_NoteList }) => {
        console.log('note list done : ', data);
        dispatch({
          type: EActionType.LOAD_NOTE_LIST,
          noteList: data.noteList,
        });
      })
      .catch((error) => {
        console.error(error);
      });
    axios.get('/bookmark-list')
      .then(({ data }: { data: IResponse_BookmarkList }) => {
        console.log('bookmark list done : ', data);
        dispatch({
          type: EActionType.LOAD_BOOKMARK_LIST,
          bookmarkList: data.bookmarkList,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ContextApiProvider>
      <AppLayout />
    </ContextApiProvider>
  );
};
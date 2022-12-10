import React, { useEffect } from "react";
import { customAxois as axios } from "@/src/util/axios";

import { AppLayout } from '@/src/components/AppLayout';

export const App = () => {
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
      })
      .catch((error) => {
        console.error(error);
      });
    axios.get('/bookmark-list')
      .then(({ data }) => {
        console.log('bookmark list done : ', data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <AppLayout />
    </>
  );
};
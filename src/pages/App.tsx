import React, { useEffect } from "react";
import { customAxois as axios } from "@/src/util/axios";

import { AppLayout } from '@/src/components/AppLayout';

export const App = () => {
  useEffect(() => {
    console.log('App.tsx loaded!!');
    // const response = await axios.get('/note-list');
  }, []);

  return (
    <>
      <AppLayout />
    </>
  );
};
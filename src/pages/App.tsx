import * as React from "react";

import { ContextApiProvider } from "@/src/contextApi/ContextApiProvider";
import { AppLayout } from '@/src/components/AppLayout';

export const App = () => {
  return (
    <ContextApiProvider>
      <AppLayout />
    </ContextApiProvider>
  );
};
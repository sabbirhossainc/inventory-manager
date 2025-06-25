"use client";

import Navbar from "@/components/Navbar";
import { Provider } from "react-redux";
import { persistor, store } from "@/redux/store";
import { Toaster } from "react-hot-toast"; 
import { PersistGate } from "redux-persist/integration/react";
import { ChildrenAsProps } from "@/types";

const AppWrapper = (props: ChildrenAsProps) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navbar />
        <main className="max-w-4xl mx-auto py-6 px-4">{props.children}</main>
        <Toaster position="bottom-right" containerClassName="mb-4 mr-4" />
      </PersistGate>
    </Provider>
  );
};

export default AppWrapper;

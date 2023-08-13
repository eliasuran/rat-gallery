import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { navSlice } from "./navSlice";
import { modalSlice } from "./modalSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [navSlice.name]: navSlice.reducer,
      [modalSlice.name]: modalSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export const wrapper = createWrapper<AppStore>(makeStore);

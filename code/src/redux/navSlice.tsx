import { createSlice } from "@reduxjs/toolkit";

export interface navState {
  navReducer: number;
}

export const navSlice = createSlice({
  name: "navReducer",
  initialState: { navValue: 0 },
  reducers: {
    setNav0: (state) => {
      state.navValue = 0;
    },
    setNav1: (state) => {
      state.navValue = 1;
    },
    setNav2: (state) => {
      state.navValue = 2;
    },
  },
});

export const { setNav0, setNav1, setNav2 } = navSlice.actions;

export default navSlice.reducer;

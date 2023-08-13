import { createSlice } from "@reduxjs/toolkit";

export interface modalState {
  modalReducer: boolean;
}

export const modalSlice = createSlice({
  name: "modalReducer",
  initialState: { modalState: false },
  reducers: {
    openModal: (state) => {
      state.modalState = true;
    },
    closeModal: (state) => {
      state.modalState = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const modalTypes = {
  editMem: "edit-mem",
  openMem: "open-mem",
};

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isOpen: false,
    type: null,
    content: null,
  },
  reducers: {
    openEditMem(state, action) {
      state.isOpen = true;
      state.type = modalTypes.editMem;
      state.content = action.payload;
    },
    openMem(state, action) {
      state.isOpen = true;
      state.type = modalTypes.openMem;
      state.content = action.payload;
    },
    closeModal(state) {
      state.isOpen = false;
      state.type = null;
      state.content = null;
    },
  },
});

export const { openEditMem, openMem, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

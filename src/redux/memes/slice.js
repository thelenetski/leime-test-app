import { createSlice } from "@reduxjs/toolkit";
import { editMeme, getMemes } from "./operation";

const handlePending = (state) => {
  state.loading = true;
};

const handleRejected = (state, action) => {
  state.loading = false;
  state.error = action.payload;
};

const memesSlice = createSlice({
  name: "memes",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMemes.pending, handlePending)
      .addCase(getMemes.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(getMemes.rejected, handleRejected)
      .addCase(editMeme.pending, handlePending)
      .addCase(editMeme.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.splice(index, 1, action.payload);
      })
      .addCase(editMeme.rejected, handleRejected);
  },
});

export const memesReducer = memesSlice.reducer;

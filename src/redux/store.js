import { configureStore } from "@reduxjs/toolkit";
import { memesReducer } from "./memes/slice";
import { modalReducer } from "./modal/slice";

export const store = configureStore({
  reducer: {
    memes: memesReducer,
    modal: modalReducer,
  },
});

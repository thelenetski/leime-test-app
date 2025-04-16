import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL =
  "https://leime-test-backend-production.up.railway.app/api";

export const getMemes = createAsyncThunk(
  "memes/getMemes",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/memes");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editMeme = createAsyncThunk(
  "memes/editMeme",
  async (meme, thunkAPI) => {
    try {
      const response = await axios.patch(`/memes/${meme.id}`, meme);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

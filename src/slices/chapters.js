import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../utilities/axios";

const initialState = {
  chapters: [],
  status: "idle",
  error: null,
};

export const fetchChapters = createAsyncThunk(
  "chapters/fetchChapters",
  async () => {
    let data;
    try {
      const response = await axios.get(`/api/chapters`);
      data = await response.data;
      if ((response.status = 200)) {
        return data;
      }
      throw new Error(response.statusText);
    } catch (err) {
      console.log(err);
      return Promise.reject(err.message ? err.message : " ");
    }
  }
);

export const toggleLikeChapter = createAsyncThunk(
  "chapter/update",
  async (id) => {
    try {
      console.log('idfo',id)
      const res = await axios.put(`/api/chapter`, {"id":id})
      const data = await res.data;
      console.log(data);
      return data;
    } catch (error) {
      return Promise.reject(error.message ? error.message : " ");
    }
  }

);

const slice = createSlice({
  name: "chapters",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchChapters.pending]: (state) => {
      state.status = "loading";
    },
    [fetchChapters.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.chapters = action.payload.chapters;
    },
    [fetchChapters.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
    [toggleLikeChapter.pending]: (state) => {
      state.status = "loading";
    },
    [toggleLikeChapter.fulfilled]: (state, action) => {
      state.status = "succeeded";
    },
    [toggleLikeChapter.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.payload;
    },
  },
});

export const reducer = slice.reducer;

export default slice;


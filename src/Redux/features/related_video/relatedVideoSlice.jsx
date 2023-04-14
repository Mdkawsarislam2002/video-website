import { createSlice } from "@reduxjs/toolkit";
import relatedVideoFetch from "./relatedVideoAPI";

const initialState = {
  videos: [],
  loading: false,
  isError: false,
  error: "",
};

const relatedVideosSlice = createSlice({
  name: "relatedVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(relatedVideoFetch.pending, (state, action) => {
        state.isError = false;
        state.error = "";
        state.loading = true;
      })
      .addCase(relatedVideoFetch.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(relatedVideoFetch.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default relatedVideosSlice;

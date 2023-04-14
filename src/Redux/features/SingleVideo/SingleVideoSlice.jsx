import { createSlice } from "@reduxjs/toolkit";
import fetchSingleVideos from "./singVideoAPI";

const initialState = {
  videos: [],
  loading: false,
  isError: false,
  error: "",
};

const SingleVideosSlice = createSlice({
  name: "homeVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleVideos.pending, (state, action) => {
        state.isError = false;
        state.error = "";
        state.loading = true;
      })
      .addCase(fetchSingleVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchSingleVideos.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default SingleVideosSlice;

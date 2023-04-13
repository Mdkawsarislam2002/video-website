import { createSlice } from "@reduxjs/toolkit";
import fetchAllVideos from "./FetchAllVideo";

const initialState = {
  videos: [],
  loading: false,
  isError: false,
  error: "",
};

const homeVideosSlice = createSlice({
  name: "homeVideos",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllVideos.pending, (state, action) => {
        state.isError = false;
        state.error = "";
        state.loading = true;
      })
      .addCase(fetchAllVideos.fulfilled, (state, action) => {
        state.loading = false;
        state.videos = action.payload;
      })
      .addCase(fetchAllVideos.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default homeVideosSlice;

import { createSlice } from "@reduxjs/toolkit";
import fetchAllVideos, { updateReaction } from "./FetchAllVideo";

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
      .addCase(fetchAllVideos.pending, (state) => {
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
    // update react
    builder
      .addCase(updateReaction.pending, (state) => {
        return state;
      })
      .addCase(updateReaction.fulfilled, (state, action) => {
        state.videos.likes = action.payload.likes;
        state.videos.unlikes = action.payload.unlikes;
      })
      .addCase(updateReaction.rejected, (state) => {
        return state;
      });
  },
});

export default homeVideosSlice;

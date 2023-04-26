import { getVideo, updateReaction } from "./videoAPI";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  video: {},
  isLoading: false,
  isError: false,
  error: "",
};

// async thunk
export const fetchVideo = createAsyncThunk("video/fetchVideo", async (id) => {
  const video = await getVideo(id);
  return video;
});

export const updateVideoReaction = createAsyncThunk(
  "/video/updateReaction",
  async ({ id, reaction }) => {
    const updatedVideo = await updateReaction({ id, reaction });
    return updatedVideo;
  }
);
const videoSlice = createSlice({
  name: "video",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(updateVideoReaction.pending, (state, action) => {
        return state;
      })
      .addCase(updateVideoReaction.fulfilled, (state, action) => {
        state.video.likes = action.payload.likes;
        state.video.unlikes = action.payload.unlikes;
      })
      .addCase(updateVideoReaction.rejected, (state, action) => {
        return state;
      });
  },
});

export default videoSlice.reducer;

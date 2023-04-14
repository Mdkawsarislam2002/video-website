import { createSlice } from "@reduxjs/toolkit";
import fetchTags from "./tagsAPI";

const initialState = {
  tags: [],
  loading: false,
  isError: false,
  error: "",
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state, action) => {
        state.isError = false;
        state.error = "";
        state.loading = true;
      })
      .addCase(fetchTags.fulfilled, (state, action) => {
        state.loading = false;
        state.tags = action.payload;
      })
      .addCase(fetchTags.rejected, (state, action) => {
        state.isError = true;
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default tagsSlice;

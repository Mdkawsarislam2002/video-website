import { configureStore } from "@reduxjs/toolkit";
import homeVideosSlice from "./features/HomeVideos/homeVideos";
import tagsSlice from "./features/tags/tagSlice";

let store = configureStore({
  reducer: {
    homeVideos: homeVideosSlice.reducer,
    tags: tagsSlice.reducer,
  },
});

export default store;

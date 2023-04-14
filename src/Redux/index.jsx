import { configureStore } from "@reduxjs/toolkit";
import homeVideosSlice from "./features/HomeVideos/homeVideos";
import tagsSlice from "./features/tags/tagSlice";
import SingleVideosSlice from "./features/SingleVideo/SingleVideoSlice";

let store = configureStore({
  reducer: {
    homeVideos: homeVideosSlice.reducer,
    tags: tagsSlice.reducer,
    singVideo: SingleVideosSlice.reducer,
  },
});

export default store;

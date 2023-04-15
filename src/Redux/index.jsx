import { configureStore } from "@reduxjs/toolkit";
import homeVideosSlice from "./features/HomeVideos/homeVideos";
import tagsSlice from "./features/tags/tagSlice";
import SingleVideosSlice from "./features/SingleVideo/SingleVideoSlice";
import relatedVideosSlice from "./features/related_video/relatedVideoSlice";
import filteredSlice from "./features/Filtered/Filtered";

let store = configureStore({
  reducer: {
    homeVideos: homeVideosSlice.reducer,
    tags: tagsSlice.reducer,
    singVideo: SingleVideosSlice.reducer,
    relatedVideos: relatedVideosSlice.reducer,
    filtered: filteredSlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import homeVideosSlice from "./features/HomeVideos/homeVideos";

let store = configureStore({
  reducer: {
    homeVideos: homeVideosSlice.reducer,
  },
});

export default store;

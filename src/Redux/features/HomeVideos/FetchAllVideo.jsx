import { createAsyncThunk } from "@reduxjs/toolkit";
import videoAxios from "../../../utils/videoAxios";

const fetchAllVideos = createAsyncThunk(
  "homeVideos/fetchAllVideos",
  async () => {
    let req = await videoAxios.get("/videos");
    return req.data;
  }
);

export default fetchAllVideos;

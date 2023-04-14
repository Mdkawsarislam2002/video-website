import { createAsyncThunk } from "@reduxjs/toolkit";
import videoAxios from "../../../utils/videoAxios";

const fetchSingleVideos = createAsyncThunk(
  "homeVideos/fetchAllVideos",
  async (id) => {
    let req = await videoAxios.get(`/videos/${id}`);
    return req.data;
  }
);

export default fetchSingleVideos;

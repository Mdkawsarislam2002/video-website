import { createAsyncThunk } from "@reduxjs/toolkit";
import videoAxios from "../../../utils/videoAxios";

const fetchAllVideos = createAsyncThunk(
  "homeVideos/fetchAllVideos",
  async ({ tags, searchValue }) => {
    let queryString = "";

    if (tags?.length > 0) {
      queryString += await tags.map((tag) => `tags_like=${tag}`).join("&");
    }
    if (searchValue !== "") {
      queryString += await `&q=${searchValue}`;
    }
    let req = await videoAxios.get(`/videos/?${queryString}`);
    return req.data;
  }
);

export default fetchAllVideos;

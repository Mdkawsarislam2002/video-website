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

export const updateReaction = createAsyncThunk(
  "homeVideos/updateReaction",
  async ({ id, reaction }) => {
    const { data } = await videoAxios.get(`/videos/${id}`);

    if (data) {
      let updatedReaction =
        reaction === "like"
          ? {
              likes: data.likes + 1,
            }
          : {
              unlikes: data.unlikes + 1,
            };

      const response = await videoAxios.patch(`/videos/${id}`, updatedReaction);
      return response.data;
    }
  }
);

export default fetchAllVideos;

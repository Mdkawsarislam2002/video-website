import { createAsyncThunk } from "@reduxjs/toolkit";
import videoAxios from "../../../utils/videoAxios";

const relatedVideoFetch = createAsyncThunk(
  "relatedVideo/relatedVideoFetch",
  async ({ tags, id }) => {
    const limit = 5;
    let queryString =
      tags?.length > 0
        ? tags.map((tag) => `tags_like=${tag}`).join("&") +
          `&id_ne=${id}&_limit=${limit}`
        : `id_ne=${id}&_limit=${limit}`;

    let req = await videoAxios.get(`/videos?${queryString}`);
    return req.data;
  }
);

export default relatedVideoFetch;

import { createAsyncThunk } from "@reduxjs/toolkit";
import videoAxios from "../../../utils/videoAxios";

const fetchTags = createAsyncThunk("tags/tagsAPI", async () => {
  let req = await videoAxios.get("/tags");
  return req.data;
});

export default fetchTags;

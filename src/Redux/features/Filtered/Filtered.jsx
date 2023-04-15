import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredTags: [],
  searchValue: "",
};

const filteredSlice = createSlice({
  name: "filtered",
  initialState,
  reducers: {
    setFilteredTags: (state, action) => {
      state.filteredTags.push(action.payload);
    },
    removeTags: (state, action) => {
      state.filteredTags = state.filteredTags.filter(
        (item) => item !== action.payload
      );
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setFilteredTags, setSearchValue, removeTags } =
  filteredSlice.actions;
export default filteredSlice;

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
      const isExist = state.filteredTags.indexOf(action.payload);

      if (isExist !== -1) {
        state.filteredTags.splice(isExist, 1);
      }
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const { setFilteredTags, setSearchValue, removeTags } =
  filteredSlice.actions;
export default filteredSlice;

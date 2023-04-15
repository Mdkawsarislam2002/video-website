import { useDispatch, useSelector } from "react-redux";
import {
  setFilteredTags,
  setSearchValue,
  removeTags,
} from "../Redux/features/Filtered/Filtered";
import { useEffect, useState } from "react";

const SingleTags = ({ title }) => {
  const dispatch = useDispatch();
  const { filteredTags, searchValue } = useSelector((state) => state.filtered);

  let isActive = filteredTags.includes(title);

  let styled = !isActive
    ? "bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
    : "bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer";

  useEffect(() => {}, [styled]);
  console.log(filteredTags);

  return (
    <div
      className={styled}
      onClick={() => {
        if (isActive) {
          dispatch(removeTags(title));
        } else {
          dispatch(setFilteredTags(title));
        }
      }}
    >
      {title}
    </div>
  );
};

export default SingleTags;

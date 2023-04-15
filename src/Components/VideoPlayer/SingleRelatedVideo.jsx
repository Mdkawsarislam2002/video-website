import React from "react";
import { Link } from "react-router-dom";

const SingleRelatedVideo = ({ video }) => {
  const {
    id,
    title,
    description,
    author,
    avatar,
    date,
    duration,
    views,
    link,
    thumbnail,
    tags,
    likes,
    unlikes,
  } = video;

  return (
    <>
      <div className="w-full flex flex-row gap-2 mb-4">
        <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
          <img
            src={thumbnail}
            className="object-cover"
            alt="Some video title"
          />

          <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
            {duration}
          </p>
        </div>

        <Link to={`/video/${id}`}>
          <div className="flex flex-col w-full">
            <p className="text-slate-900 text-sm font-semibold">{title}</p>

            <p className="text-gray-400 text-xs mt-2 hover:text-gray-600">
              Learn with Sumit
            </p>
            <p className="text-gray-400 text-xs mt-1">
              {views} {date}
            </p>
          </div>
        </Link>
      </div>
    </>
  );
};

export default SingleRelatedVideo;

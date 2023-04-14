import React from "react";
import SingleRelatedVideo from "./SingleRelatedVideo";
import LikeUnlikeInVideo from "./LikeUnlikeInVideo";

const VideoBody = ({ video = {} }) => {
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
      <section className="pt-6 pb-20">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              {/* video player */}
              <iframe
                width="100%"
                className="aspect-video"
                src={link}
                title="Some video title"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {/* video description */}
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                  {title}
                </h1>
                <div className="pb-4 flex items-center space-between border-b">
                  <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on {date}
                  </h2>

                  {/* like/unlike */}
                  <LikeUnlikeInVideo likes={likes} unlikes={unlikes} />
                </div>

                <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                  {description}
                </div>
              </div>
            </div>

            {/* related videos */}
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
              {/* single related video */}
              <SingleRelatedVideo />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoBody;

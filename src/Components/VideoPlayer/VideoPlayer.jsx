import React from "react";

const VideoPlayer = () => {
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
                src="https://www.youtube-nocookie.com/embed/6O4s7v28nlw"
                title="Some video title"
                frameborder=""
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>

              {/* video description */}
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                  Some video title
                </h1>
                <div className="pb-4 flex items-center space-between border-b">
                  <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    Uploaded on 23 Nov 2022
                  </h2>

                  {/* like/unlike */}
                  <div className="flex gap-10 w-48">
                    <div className="flex gap-1">
                      <div className="shrink-0">
                        <img
                          className="w-5 block"
                          src="./assets/like.svg"
                          alt="Like"
                        />
                      </div>
                      <div className="text-sm leading-[1.7142857] text-slate-600">
                        100K
                      </div>
                    </div>
                    <div className="flex gap-1">
                      <div className="shrink-0">
                        <img
                          className="w-5 block"
                          src="./assets/unlike.svg"
                          alt="Unlike"
                        />
                      </div>
                      <div className="text-sm leading-[1.7142857] text-slate-600">
                        100K
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
                  Some video description here
                </div>
              </div>
            </div>

            {/* related videos */}
            <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
              {/* single related video */}
              <div className="w-full flex flex-row gap-2 mb-4">
                <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                  <a href="video.html">
                    <img
                      src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
                      className="object-cover"
                      alt="Some video title"
                    />
                  </a>
                  <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    12:10
                  </p>
                </div>

                <div className="flex flex-col w-full">
                  <a href="#">
                    <p className="text-slate-900 text-sm font-semibold">
                      Some video title
                    </p>
                  </a>
                  <a
                    className="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href="#"
                  >
                    Learn with Sumit
                  </a>
                  <p className="text-gray-400 text-xs mt-1">
                    100K views . 23 Oct 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoPlayer;

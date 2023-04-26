import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Loading from "./Loading";
import VideoGridItems from "./VideoGridItems";
import fetchAllVideos from "../Redux/features/HomeVideos/FetchAllVideo";

const VideoGrid = () => {
  const dispatch = useDispatch();
  const { searchValue, filteredTags } = useSelector((state) => state.filtered);
  const { videos, loading, error, isError } = useSelector(
    (state) => state.homeVideos
  );

  useEffect(() => {
    dispatch(fetchAllVideos({ tags: filteredTags, searchValue: searchValue }));
  }, [searchValue, filteredTags, dispatch]);
  let watchVideo;

  if (videos.length > 0 && !loading && !error) {
    watchVideo = videos.map((video) => {
      return <VideoGridItems key={video.id} video={video} />;
    });
  } else if (loading) {
    watchVideo = <Loading />;
  } else if (isError) {
    watchVideo = error;
  }

  return (
    <>
      <section className="pt-12 px-3">
        <section className="pt-12">
          <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
            {watchVideo}
          </div>
        </section>
      </section>
    </>
  );
};

export default VideoGrid;

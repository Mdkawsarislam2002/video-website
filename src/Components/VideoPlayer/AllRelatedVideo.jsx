import { useDispatch, useSelector } from "react-redux";
import SingleRelatedVideo from "./SingleRelatedVideo";
import relatedVideoFetch from "../../Redux/features/related_video/relatedVideoAPI";
import { useEffect } from "react";
import Loading from "../Loading";

const AllRelatedVideo = ({ tags = [], currentVideoID = 0 }) => {
  const { videos, loading, isError, error } = useSelector(
    (state) => state.relatedVideos
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(relatedVideoFetch({ tags, currentVideoID }));
  }, []);

  let viewVideos;

  if (loading) {
    viewVideos = <Loading />;
  } else if (isError) {
    viewVideos = error.message;
  } else if (videos.length === 0) {
    viewVideos = <p>No Videos Found</p>;
  } else if (videos.length > 0) {
    viewVideos = videos.map((video) => (
      <SingleRelatedVideo key={video.id} video={video} />
    ));
  }

  return (
    <div className="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
      {/* single related video */}

      {viewVideos}
    </div>
  );
};

export default AllRelatedVideo;

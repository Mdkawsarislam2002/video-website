import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import VideoBody from "../Components/VideoPlayer/VideoBody";
import { useEffect } from "react";
import fetchSingleVideos from "../Redux/features/SingleVideo/singVideoAPI";

const VideoPlayer = () => {
  const video = useSelector((state) => state?.singVideo?.videos);
  const disPatch = useDispatch();
  const { videoID } = useParams();

  useEffect(() => {
    disPatch(fetchSingleVideos(videoID));
  }, []);

  return (
    <div>
      <VideoBody video={video} />
    </div>
  );
};

export default VideoPlayer;

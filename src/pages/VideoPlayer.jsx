import { useLocation } from "react-router-dom";
import VideoBody from "../Components/VideoPlayer/VideoBody";

const VideoPlayer = () => {
  const location = useLocation();

  return (
    <div>
      <VideoBody video={location?.state} />
    </div>
  );
};

export default VideoPlayer;

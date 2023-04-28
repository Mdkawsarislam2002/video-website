/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { updateReaction } from "../../Redux/features/HomeVideos/FetchAllVideo";

// icons
import like from "../../assets/like.svg";
import unlike from "../../assets/unlike.svg";

const LikeUnlikeInVideo = ({ likes, unlikes, id }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-10 w-48">
      <div
        className="flex gap-1 cursor-pointer"
        onClick={() => {
          dispatch(updateReaction({ id, reaction: "like" }));
        }}
      >
        <div className="shrink-0">
          <img className="w-5 block" src={like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {likes}
        </div>
      </div>
      {/* unlike  */}
      <div
        className="flex gap-1 cursor-pointer"
        onClick={() => {
          dispatch(updateReaction({ id, reaction: "unlike" }));
        }}
      >
        <div className="shrink-0">
          <img className="w-5 block" src={unlike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">
          {unlikes}
        </div>
      </div>
    </div>
  );
};

export default LikeUnlikeInVideo;

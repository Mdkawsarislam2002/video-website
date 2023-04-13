//  Components
import Nav from "../Components/Nav";
import Tags from "../Components/Tags";
import VideoGrid from "../Components/VideoGrid";
import Pagination from "../Components/Pagination";

export const Home = () => {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
};

export default Home;

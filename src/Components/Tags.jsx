import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTags from "../Redux/features/tags/tagsAPI";
import SingleTags from "./SingleTags";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);

  return (
    <>
      <section className="px-3">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto ">
          {tags.length > 0 &&
            tags.map((items) => (
              <SingleTags key={items.id} title={items.title} />
            ))}
        </div>
      </section>
    </>
  );
};

export default Tags;

// bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer

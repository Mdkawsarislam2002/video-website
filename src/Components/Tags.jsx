import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchTags from "../Redux/features/tags/tagsAPI";

const Tags = () => {
  const dispatch = useDispatch();
  const { tags } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, []);
  console.log(tags);
  return (
    <>
      <section className="px-3">
        <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex gap-2 border-b overflow-y-auto ">
          {tags.length > 0 &&
            tags.map((tag) => (
              <div
                key={tag.id}
                className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full cursor-pointer"
              >
                {tag.title}
              </div>
            ))}
        </div>
      </section>
    </>
  );
};

export default Tags;

// bg-blue-600 text-white px-4 py-1 rounded-full cursor-pointer

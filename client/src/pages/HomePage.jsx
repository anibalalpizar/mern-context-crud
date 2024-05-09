import { usePostContext } from "../context/postContext";
import { VscEmptyWindow } from "react-icons/vsc";

export function HomePage() {
  const { posts } = usePostContext();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-2xl text-white">There are no posts to display.</h1>
      </div>
    );

  return (
    <div className="text-white">
      {posts.map((post) => (
        <div key={post._id}>
          <h1>{post.title}</h1>
        </div>
      ))}
    </div>
  );
}

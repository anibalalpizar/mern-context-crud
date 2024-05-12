import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";
import { usePostContext } from "../context/postContext";

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
      <header className="flex justify-between py-4">
        <h1 className="text-2xl text-gray-300 font-bold">
          {posts.length} Posts
        </h1>
        <Link
          to="/new"
          className="px-3 py-2 bg-indigo-500 hover:bg-indigo-600 text-white"
        >
          Create Post
        </Link>
      </header>
      <div className="grid grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard post={post} key={post._id} />
        ))}
      </div>
    </div>
  );
}

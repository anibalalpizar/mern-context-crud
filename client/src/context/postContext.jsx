import { createContext, useContext, useEffect, useState } from "react";
import { createPostRequest, getPostsRequest } from "../api/posts";

const context = createContext();

export const usePostContext = () => useContext(context);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await getPostsRequest();
    setPosts(data);
  };

  const createPost = async (post) => {
    const { data } = await createPostRequest(post);
    setPosts([...posts, data]);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <context.Provider
      value={{
        posts,
        createPost,
      }}
    >
      {children}
    </context.Provider>
  );
};

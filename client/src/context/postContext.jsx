import { createContext, useContext, useEffect, useState } from "react";
import {
  createPostRequest,
  deletePostRequest,
  getPostsRequest,
} from "../api/posts";

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

  const deletePost = async (id) => {
    await deletePostRequest(id);
    setPosts(posts.filter((post) => post._id !== id));
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <context.Provider
      value={{
        posts,
        createPost,
        deletePost,
      }}
    >
      {children}
    </context.Provider>
  );
};

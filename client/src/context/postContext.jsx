import { createContext, useContext, useEffect, useState } from "react";
import {
  createPostRequest,
  deletePostRequest,
  getPostRequest,
  getPostsRequest
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

  const getPost = async (id) => {
    const { data } = await getPostRequest(id);
    return data;
  }

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <context.Provider
      value={{
        posts,
        createPost,
        deletePost,
        getPost
      }}
    >
      {children}
    </context.Provider>
  );
};

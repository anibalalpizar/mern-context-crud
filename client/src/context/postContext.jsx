import { createContext, useContext, useState, useEffect } from "react";
import { getPostsRequest } from "../api/posts";

const context = createContext();

export const usePostContext = () => useContext(context);

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const { data } = await getPostsRequest();
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <context.Provider
      value={{
        posts,
      }}
    >
      {children}
    </context.Provider>
  );
};

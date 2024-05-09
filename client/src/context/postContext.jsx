import { createContext, useContext, useState } from "react";

const context = createContext();

export const usePostContext = () => useContext(context);

export const PostProvider= ({ children }) => {
  const [posts, setPosts] = useState([]);
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

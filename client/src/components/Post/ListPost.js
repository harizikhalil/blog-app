import React, { useEffect, useState } from "react";
import axios from "axios";
const ListPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get("/api/blog/allPosts");
      console.log(res.data.blogs);
    } catch (error) {
      console.log(error.response);
    }
  }, []);
  return <div></div>;
};

export default ListPost;

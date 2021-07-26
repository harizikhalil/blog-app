import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { Typography, Row } from "antd";
import "./postCard.css";
const { Title } = Typography;
const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const isAuth = useSelector((state) => state.authReducer.isAuth);
  useEffect(async () => {
    try {
      const res = await axios.get("/api/blog/allPosts");
      setPosts(res.data.blogs);
    } catch (error) {
      console.log(error.response);
    }
  }, []);
  console.log("posts", posts);
  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <Title level={2} style={{ marginBottom: "20px" }}>
        {" "}
        Blog Lists{" "}
      </Title>
      {isAuth ? (
        <Link to="/addPost" className="add-post">
          <i class="fas fa-plus-circle"></i>Add new Post{" "}
        </Link>
      ) : null}
      <Row gutter={[32, 16]}>
        <div className="list-container">
          {posts.map((post) => {
            return <PostCard post={post} key={post._id} />;
          })}
        </div>
      </Row>
    </div>
  );
};

export default ListPost;

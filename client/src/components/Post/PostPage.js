import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography } from "antd";

const { Title } = Typography;
const PostPage = (props) => {
  const postId = props.match.params.postId;
  const [post, setPost] = useState([]);
  useEffect(async () => {
    try {
      const res = await axios.get(`/api/blog//getpost/${postId}`);
      setPost(res.data.post);
      //console.log(res.data.post);
    } catch (error) {
      console.log(error.response);
    }
  }, []);

  if (post.writer) {
    return (
      <div className="postPage" style={{ width: "80%", margin: "3rem auto" }}>
        <Title level={2}>
          {post.writer.UserName}`s Post : {post.title}
        </Title>
        <br />
        <p>{post.description}</p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Title level={4}>{post.date}</Title>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
    );
  } else {
    return <div style={{ width: "80%", margin: "3rem auto" }}>loading...</div>;
  }
};

export default PostPage;

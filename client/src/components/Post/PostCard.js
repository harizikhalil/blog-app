import React from "react";
import { Link } from "react-router-dom";
import avatarImg from "../../img/avatar-img.png";

const PostCard = ({ post }) => {
  return (
    <div className="post-card">
      <div className="card-header">
        <img src={avatarImg} alt="avatar-img" />
        <p>{post.writer.UserName}</p>
      </div>
      <div className="post-details">
        <p>Title : {post.title}</p>
        <p>Description: {post.description}</p>
      </div>
      <div style={{ height: 150, overflowY: "scroll", marginTop: 10 }}>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </div>
      <div className="link-post">
        <Link to={`/blog/post/${post._id}`} className="sg-post">
          View post <i class="fas fa-arrow-circle-right"></i>
        </Link>
      </div>
    </div>
  );
};

export default PostCard;

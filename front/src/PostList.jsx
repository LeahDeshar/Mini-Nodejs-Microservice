import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
function PostList() {
  const [post, setpost] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get("http://localhost:4000/posts");
      setpost(res.data);
    };
    fetchPost();
  }, [post]);

  const renderedPosts = Object.values(post).map((post) => {
    return (
      <div
        key={post?.id}
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
      >
        <div className="card-body">
          <h3>{post?.title}</h3>
          <CommentCreate postId={post?.id} />
        </div>
      </div>
    );
  });
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
}

export default PostList;

// import axios from "axios";
import React from "react";

function CommentList({ comments }) {
  // const [comment, setComment] = useState([]);

  // useEffect(() => {
  //   const fetchComment = async () => {
  //     const res = await axios.get(
  //       `http://localhost:4001/posts/${postId}/comments`
  //     );
  //     setComment(res.data);
  //   };
  //   fetchComment();
  // }, [comment, postId]);

  const renderedComments = comments.map((comment) => {
    let content;

    if (comment.status === "approved") {
      content = comment.content;
    }
    if (comment.status === "pending") {
      content = "This comment is awaiting moderation";
    }
    if (comment.status === "rejected") {
      content = "This comment has been rejected";
    }
    return <li key={comment?.id}>{content}</li>;
  });
  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
}

export default CommentList;

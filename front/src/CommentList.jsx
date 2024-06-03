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
    return <li key={comment?.id}>{comment?.content}</li>;
  });
  return (
    <div>
      <ul>{renderedComments}</ul>
    </div>
  );
}

export default CommentList;

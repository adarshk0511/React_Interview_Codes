import { useState } from "react";
import Comment from "./comment";

const CommentList = ({ comments, insertReply }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState("");

  const addReply = (e, commentId) => {
    if (e.keyCode == 13 && e.target.value) {
      insertReply(commentId, e.target.value);
      setShowInput("");
      setExpand(false);
    }
  };
  return (
    <div className="comment-list" style={{ paddingLeft: "15px" }}>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} insertReply={insertReply} />
      ))}
    </div>
  );
};

export default CommentList;

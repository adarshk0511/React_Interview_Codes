import { useState } from "react";
import CommentList from "./commentList";

const Comment = ({ comment, insertReply }) => {
  const [showInput, setShowInput] = useState(false);
  const [input, setInput] = useState("");

  const handleReply = (e) => {
    if (e.key === "Enter" && input.trim()) {
      insertReply(comment.id, input);
      setInput("");
      setShowInput(false);
    }
  };

  return (
    <div>
      <p>
        ⌊{comment.text}{" "}
        <strong
          style={{ cursor: "pointer" }}
          onClick={() => setShowInput(true)}
        >
          reply
        </strong>
      </p>

      {showInput && (
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleReply}
          onBlur={() => setShowInput(false)}
          autoFocus
        />
      )}

      {comment.replies.length > 0 && (
        <CommentList comments={comment.replies} insertReply={insertReply} />
      )}
    </div>
  );
};

export default Comment;

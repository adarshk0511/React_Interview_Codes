import { useState } from "react";
import CommentList from "./components/commentList";
import { initialComments } from "./data/initialComments";
import useTraverseTree from "./hooks/useTraverseTree";
import "./styles.css";

export default function App() {
  const [comments, setComments] = useState(initialComments);
  const [maxId, setMaxId] = useState(10);

  const { insertNode } = useTraverseTree();
  const insertReply = (commentId, item) => {
    const updatedComments = insertNode(comments, commentId, item, maxId + 1);
    setComments(updatedComments);
    setMaxId((prev) => prev + 1);
  };
  return (
    <div className="App">
      <h1>Comment System — Nested Replies</h1>
      <CommentList comments={comments} insertReply={insertReply} />
    </div>
  );
}

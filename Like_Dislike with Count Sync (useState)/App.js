import { useState } from "react";
import "./styles.css";

export default function App() {
  const [reaction, setReaction] = useState({
    likes: 0,
    dislikes: 0,
    userReaction: null,
  });

  const handleLike = () => {
    setReaction((prev) => {
      if (prev.userReaction === null) {
        return {
          ...prev,
          likes: prev.likes + 1,
          userReaction: "like",
        };
      }

      if (prev.userReaction === "dislike") {
        return {
          ...prev,
          likes: prev.likes + 1,
          dislikes: prev.dislikes - 1,
          userReaction: "like",
        };
      }

      return {
        ...prev,
        likes: prev.likes - 1,
        userReaction: null,
      };
    });
  };

  const handleDislike = () => {
    setReaction((prev) => {
      if (prev.userReaction === null) {
        return {
          ...prev,
          dislikes: prev.dislikes + 1,
          userReaction: "dislike",
        };
      }

      if (prev.userReaction === "like") {
        return {
          ...prev,
          likes: prev.likes - 1,
          dislikes: prev.dislikes + 1,
          userReaction: "dislike",
        };
      }

      return {
        ...prev,
        dislikes: prev.dislikes - 1,
        userReaction: null,
      };
    });
  };
  return (
    <div className="App">
      <h1>Like / Dislike with Count Sync</h1>
      <div>
        <button onClick={handleLike}>👍</button>{" "}
        <button onClick={handleDislike}>👎</button>
      </div>
      <div>
        <span>Likes: {reaction.likes} ||</span>{" "}
        <span>Dislikes: {reaction.dislikes} ||</span>{" "}
        <span>Reaction: {reaction.userReaction}</span>
      </div>
    </div>
  );
}

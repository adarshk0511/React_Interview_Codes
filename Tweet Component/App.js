import ShareIcon from "./icons/share";
import LikeIcon from "./icons/like";
import ReplyIcon from "./icons/reply";
import RetweetIcon from "./icons/retweet";
import "./styles.css";
import { useState } from "react";
const tweet = {
  avatarUrl: "https://i.pravatar.cc/150?img=12",
  name: "Ada Lovelace",
  username: "@ada",
  content:
    "The Analytical Engine weaves algebraic patterns, just as the Jacquard loom weaves flowers and leaves.",
  timestamp: "2h",
  likes: 128,
  retweets: 45,
  replies: 12,
};

export default function App() {
  const [liked, setLiked] = useState(false);
  const [retweeted, setRetweeted] = useState(false);

  const [likes, setLikes] = useState(tweet.likes);
  const [retweets, setRetweets] = useState(tweet.retweets);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  const toggleRetweet = () => {
    setRetweeted((prev) => !prev);
    setRetweets((prev) => (retweeted ? prev - 1 : prev + 1));
  };

  return (
    <div className="App">
      <h1>Tweet Component</h1>

      <div className="tweet">
        <div className="header">
          <img
            className="img"
            style={{ borderRadius: "50%" }}
            src={tweet.avatarUrl}
            alt={tweet.name.charAt(0)}
          />{" "}
          <div
            style={{
              display: "grid",
              gridTemplateRows: "1fr 1fr",
              textAlign: "left",
              marginLeft: "10px",
              marginTop: "2px",
            }}
          >
            <span style={{ fontWeight: "bold" }}>{tweet.name}</span>
            <span>{tweet.username}</span>
          </div>
          <div style={{ marginLeft: "auto", marginTop: "10px" }}>• • •</div>
        </div>
        <div className="content">
          <p>{tweet.content}</p> <span>{tweet.timestamp}</span>
        </div>
        <div className="count">
          <div>
            {retweets} <span style={{ fontWeight: "bold" }}>Retweets</span>
          </div>

          <div>
            {tweet.replies} <span style={{ fontWeight: "bold" }}>Replies</span>
          </div>

          <div>
            {likes} <span style={{ fontWeight: "bold" }}>Likes</span>
          </div>
        </div>
        <div className="footer">
          <button className="btn">
            <ReplyIcon />
          </button>
          <button onClick={toggleRetweet} className="btn">
            <RetweetIcon />
          </button>
          <button onClick={toggleLike} className="btn">
            <LikeIcon filled={liked} />
          </button>
          <button className="btn">
            <ShareIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

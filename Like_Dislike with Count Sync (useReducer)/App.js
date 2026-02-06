import { useReducer } from "react";
import { initialState } from "./data/initialState";
import { reactionReducer } from "./functions/reactionReducer";
import "./styles.css";

const ACTIONS = {
  LIKE: "LIKE",
  DISLIKE: "DISLIKE",
};

export default function App() {
  const [state, dispatch] = useReducer(reactionReducer, initialState);
  return (
    <div className="App">
      <h1>Like / Dislike with Count Sync useReducer</h1>
      <div>
        <button onClick={() => dispatch({ type: ACTIONS.LIKE })}>👍</button>{" "}
        <button onClick={() => dispatch({ type: ACTIONS.DISLIKE })}>👎</button>
      </div>
      <div>
        <span>Likes: {state.likes} ||</span>{" "}
        <span>Dislikes: {state.dislikes} ||</span>{" "}
        <span>Reaction: {state.userReaction}</span>
      </div>
    </div>
  );
}

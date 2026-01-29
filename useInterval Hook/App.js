import { useState } from "react";
import useInterval from "./hooks/useInterval";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  useInterval(incrementCounter, 1000);

  return (
    <div className="App">
      <h1>useInterval Hook</h1>
      <h3>{count}</h3>
    </div>
  );
}

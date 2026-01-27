import { useEffect, useRef, useState } from "react";
import { usePrevious } from "./hooks/usePrevious";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div className="App">
      <h1>usePrevious Hook</h1>

      <p>Current: {count}</p>
      <p>Previous: {prevCount ?? "N/A"}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>+</button>
    </div>
  );
}

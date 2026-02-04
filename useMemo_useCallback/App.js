import { useCallback, useMemo, useState } from "react";
import "./styles.css";
import { Child } from "./utils/child";
import { expensiveCalculation } from "./utils/expensiveFunction";

export default function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  const result = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]);

  const handleChildClick = useCallback(() => {
    console.log("clicked");
  }, []);

  return (
    <div className="App">
      <h1>Memoized Expensive Component – useMemo/useCallback</h1>
      <h2>Result: {result}</h2>

      <button onClick={() => setCount(count + 1)}>Increment Count</button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      <Child onClick={handleChildClick} />
    </div>
  );
}

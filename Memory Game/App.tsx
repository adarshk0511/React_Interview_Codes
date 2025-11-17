import { useState } from "react";
import MemoryGame from "./components/memory-game";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <MemoryGame />
    </div>
  );
}

export default App;

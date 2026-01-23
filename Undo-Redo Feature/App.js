import { useState } from "react";
import "./styles.css";

export default function App() {
  const [current, setCurrent] = useState("");
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);

  const handleChange = (e) => {
    setCurrent(e.target.value);
    setUndo((prev) => [...prev, e.target.value]);
  };

  const handleUndo = () => {};

  const handleRedo = () => {};

  return (
    <div className="App">
      <h1>Undo / Redo Feature</h1>
      <input value={current} onChange={(e) => handleChange} />
      <button onClick={handleUndo}>Undo</button>
      <button onClick={handleRedo}>Redo</button>
    </div>
  );
}

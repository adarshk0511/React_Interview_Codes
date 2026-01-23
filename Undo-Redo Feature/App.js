import { useState } from "react";
import "./styles.css";

export default function App() {
  const [current, setCurrent] = useState("");
  const [undo, setUndo] = useState([]);
  const [redo, setRedo] = useState([]);

  const handleChange = (e) => {
    const newValue = e.target.value;

    setUndo((prev) => [...prev, current]);
    setCurrent(newValue);
    setRedo([]);
  };

  const handleUndo = () => {
    if (undo.length === 0) return;

    const previous = undo[undo.length - 1];

    setUndo((prev) => prev.slice(0, -1));
    setRedo((prev) => [...prev, current]);
    setCurrent(previous);
  };

  const handleRedo = () => {
    if (redo.length === 0) return;

    const next = redo[redo.length - 1];

    setRedo((prev) => prev.slice(0, -1));
    setUndo((prev) => [...prev, current]);
    setCurrent(next);
  };

  return (
    <div className="App">
      <h1>Undo / Redo Feature</h1>
      <input type="text" value={current} onChange={handleChange} />
      <button onClick={handleUndo} disabled={undo.length === 0}>
        Undo
      </button>
      <button onClick={handleRedo} disabled={redo.length === 0}>
        Redo
      </button>
    </div>
  );
}

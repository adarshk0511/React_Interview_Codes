import { useState } from "react";
import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [chips, setChips] = useState(["One", "Two"]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      setChips((prev) => [...prev, inputText]);
      setInputText("");
    }
  };

  const handleDelete = (index) => {
    const newChips = [...chips];
    newChips.splice(index, 1);
    setChips(newChips);
  };
  return (
    <div className="App">
      <h1>Chips Input</h1>
      <input
        type="text"
        placeholder="Type to add chip"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyDown={(e) => handleKeyDown(e)}
      />

      <div style={{ display: "flex" }}>
        {chips.map((chip, index) => {
          return (
            <div className="chip">
              {chip}{" "}
              <button className="del" onClick={() => handleDelete(index)}>
                X
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

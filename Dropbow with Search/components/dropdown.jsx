import { useState } from "react";
import { options } from "../data/optionsList";

const Dropdown = () => {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const filteredResult = options.filter((opt) =>
    opt.toLowerCase().includes(input.toLowerCase())
  );

  const handleKeyDown = (e) => {
    if (!showResults) return;

    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        Math.min(prev + 1, filteredResult.length - 1)
      );
    }

    if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    }
    if (e.key === "Enter" && highlightedIndex >= 0) {
      setInput(filteredResult[highlightedIndex]);
      setShowResults(false);
    }

    if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  return (
    <div>
      <input
        type="text"
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResults(true)}
        onKeyDown={(e) => handleKeyDown(e)}
      />
      {showResults && (
        <div
          className="results-container"
          onMouseDown={(e) => e.preventDefault()}
        >
          {filteredResult.length === 0 && <p>No results</p>}

          {filteredResult.map((op, index) => (
            <span
              className={`result ${
                index === highlightedIndex ? "highlighted" : ""
              }`}
              key={op}
              onClick={() => {
                setInput(op);
                setShowResults(false);
              }}
            >
              {op}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

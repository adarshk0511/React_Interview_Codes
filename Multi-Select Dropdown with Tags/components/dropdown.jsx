import { useState } from "react";
import { options } from "../data/optionsList";

const Dropdown = () => {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(true);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [tags, setTags] = useState([]);

  const filteredList = options.filter((opt) =>
    opt.toLowerCase().includes(input.toLowerCase())
  );

  //Handle keyboard inputs
  const handleKeyDown = (e) => {
    if (!showResults) return;

    if (e.key === "ArrowDown") {
      setHighlightedIndex((prev) =>
        Math.min(prev + 1, filteredList.length - 1)
      );
    }

    if (e.key === "ArrowUp") {
      setHighlightedIndex((prev) => Math.max(prev - 1, 0));
    }
    if (e.key === "Enter" && highlightedIndex >= 0 && input.length > 0) {
      setInput(filteredList[highlightedIndex]);

      if (tags.includes(filteredList[highlightedIndex])) return;
      setTags((prev) => [...prev, filteredList[highlightedIndex]]);
    }

    if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  const deleteTag = (index) => {
    setTags((prev) => prev.filter((_, i) => i !== index));
  };

  const addTag = (index) => {
    if (tags.includes(filteredList[index])) return;
    setTags((prev) => [...prev, filteredList[index]]);
  };

  return (
    <div className="outer">
      <div>
        <input
          type="text"
          className="search-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
          onFocus={() => setShowResults(true)}
        />
        {showResults && (
          <div className="results-container">
            {filteredList.map((opt, index) => {
              return (
                <span
                  key={opt}
                  onClick={() => addTag(index)}
                  className={`result ${
                    index === highlightedIndex ? "highlighted" : ""
                  }`}
                >
                  {opt}
                </span>
              );
            })}
          </div>
        )}
      </div>
      <div className="tags-container">
        <h3>Tags</h3>
        {tags.map((tag, index) => {
          return (
            <span key={tag} className="tag">
              {tag} <button onClick={() => deleteTag(index)}>❌</button>
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;


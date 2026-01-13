import { useState } from "react";
import { options } from "../data/optionsList";

const Dropdown = () => {
  const [input, setInput] = useState("");
  const [showResults, setShowResults] = useState(false);

  const filteredResult = options.filter((opt) =>
    opt.toLowerCase().includes(input.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        className="search-input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onFocus={() => setShowResults(true)}
      />
      {showResults && (
        <div
          className="results-container"
          onMouseDown={(e) => e.preventDefault()}
        >
          {filteredResult.length === 0 && <p>No results</p>}

          {filteredResult.map((op) => (
            <p
              key={op}
              onClick={() => {
                setInput(op);
                setShowResults(false);
              }}
            >
              {op}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

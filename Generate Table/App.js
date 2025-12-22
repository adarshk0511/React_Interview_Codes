import { useState } from "react";
import GenTable from "./components/genTable";
import "./styles.css";

export default function App() {
  const [rowsInput, setRowsInput] = useState("");
  const [colsInput, setColsInput] = useState("");
  const [rows, setRows] = useState(null);
  const [cols, setCols] = useState(null);
  const [error, setError] = useState("");

  const handleGenerate = () => {
    const r = Number(rowsInput);
    const c = Number(colsInput);

    if (!Number.isInteger(r) || !Number.isInteger(c) || r <= 0 || c <= 0) {
      setError("Rows and columns must be positive numbers");
      setRows(null);
      setCols(null);
      return;
    }

    setError("");
    setRows(r);
    setCols(c);
  };

  return (
    <div className="App">
      <h1>Generate Table</h1>

      <div className="form">
        <input
          type="number"
          placeholder="Rows"
          value={rowsInput}
          onChange={(e) => setRowsInput(e.target.value)}
        />

        <input
          type="number"
          placeholder="Columns"
          value={colsInput}
          onChange={(e) => setColsInput(e.target.value)}
        />

        <button onClick={handleGenerate}>Generate</button>
      </div>

      {error && <p className="error">{error}</p>}

      {rows && cols && <GenTable rows={rows} cols={cols} />}
    </div>
  );
}

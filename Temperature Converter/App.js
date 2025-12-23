import { useState } from "react";
import "./styles.css";

export default function App() {
  const [temp, setTemp] = useState("");
  const [option, setOption] = useState("c2f");

  // Derived value (no useEffect needed)
  const getResult = () => {
    if (temp === "") return null;

    const value = Number(temp);
    if (Number.isNaN(value)) return "Invalid input";

    if (option === "c2f") {
      return ((value * 9) / 5 + 32).toFixed(2);
    }
    return (((value - 32) * 5) / 9).toFixed(2);
  };

  const result = getResult();

  return (
    <div className="App">
      <h1>Temperature Converter</h1>
      <p>Select an option to convert</p>

      <input
        type="number"
        placeholder="Enter temperature"
        value={temp}
        onChange={(e) => setTemp(e.target.value)}
      />

      <select value={option} onChange={(e) => setOption(e.target.value)}>
        <option value="c2f">Celsius → Fahrenheit</option>
        <option value="f2c">Fahrenheit → Celsius</option>
      </select>

      {result !== null && (
        <div className="result">
          Result: {result} {option === "c2f" ? "°F" : "°C"}
        </div>
      )}
    </div>
  );
}

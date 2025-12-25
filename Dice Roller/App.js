import { useState } from "react";
import Dice from "./components/dice";
import "./styles.css";

export default function App() {
  const [val, setVal] = useState(0);
  const roll = () => {
    const num = Math.floor(Math.random() * 6) + 1;
    setVal(num);
  };

  return (
    <div className="App">
      <h1>Dice Roller</h1>
      <Dice val={val} />
      <button onClick={roll}>Roll the dice</button>
    </div>
  );
}

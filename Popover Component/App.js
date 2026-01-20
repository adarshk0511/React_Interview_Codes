import { useState } from "react";
import Popover from "./components/popover";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Popover Component</h1>
      <Popover content="This is a Popover" position="bottom">
        <button>Click me</button>
      </Popover>
    </div>
  );
}

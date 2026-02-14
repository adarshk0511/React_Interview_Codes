import { useState } from "react";
import Widgets from "./compoments/widgets";
import { initialWidgets } from "./data/initialWidgets";
import "./styles.css";

export default function App() {
  const [widgets, setWidgets] = useState(initialWidgets);
  return (
    <div className="App">
      <h1>Dashboard Widgets Layout (Draggable)</h1>
      <Widgets widgets={widgets} setWidgets={setWidgets} />
    </div>
  );
}

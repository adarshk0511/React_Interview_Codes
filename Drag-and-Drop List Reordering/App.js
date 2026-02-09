import { useState } from "react";
import List from "./components/list";
import { initialItems } from "./data/initialData";
import "./styles.css";

export default function App() {
  const [list, setList] = useState(initialItems);

  return (
    <div className="App">
      <h1>Drag-and-Drop List Reordering</h1>
      <List list={list} setList={setList} />
    </div>
  );
}

import { useState } from "react";
import "./styles.css";
import Notes from "./components/notes";

export default function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Text1" },
    { id: 2, text: "Text2" },
  ]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <Notes notes={notes} setNotes={setNotes} />
    </div>
  );
}

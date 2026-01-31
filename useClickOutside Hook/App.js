import { useRef, useState } from "react";
import useClickOutside from "./hooks/useClickOutside";
import "./styles.css";

export default function App() {
  const ref = useRef(null);
  const [open, setOpen] = useState(true);

  useClickOutside(ref, () => setOpen(false));

  return (
    <div className="App">
      <h1>useClickOutside Hook</h1>
      {open && (
        <div className="box" ref={ref}>
          Dropdown Box
        </div>
      )}

      {!open && <button onClick={() => setOpen(true)}>Open Dropdown</button>}
    </div>
  );
}

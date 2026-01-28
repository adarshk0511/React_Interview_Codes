import { useState } from "react";
import useDebounce from "./hooks/useDebounce";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const debounceSearch = useDebounce(query, 500);
  return (
    <div className="App">
      <h1>useDebounce Hook</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
      />

      <h3>Debounced Search: {debounceSearch}</h3>
    </div>
  );
}

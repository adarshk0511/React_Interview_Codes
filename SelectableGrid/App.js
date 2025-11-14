import "./styles.css";
import SelectableGrid from "./components/selectable-grid";
export default function App() {
  return (
    <div className="App">
      <h1>Selected Grid</h1>
      <SelectableGrid rows={5} cols={5} />
    </div>
  );
}

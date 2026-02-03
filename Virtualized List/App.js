import VirtualisedList from "./components/virtualisedList";
import "./styles.css";

export default function App() {
  const items = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
  return (
    <div className="App">
      <h1>Virtualized List</h1>
      <VirtualisedList items={items} height={500} itemHeight={20} />
    </div>
  );
}

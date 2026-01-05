import TransferList from "./components/transferList";
import "./styles.css";

export default function App() {
  const List1 = [
    { item: "HTML", isSelected: true },
    { item: "CSS", isSelected: false },
    { item: "JavaScript", isSelected: false },
    { item: "TypeScript", isSelected: false },
  ];

  const List2 = [
    { item: "React", isSelected: false },
    { item: "Angular", isSelected: false },
    { item: "Vue", isSelected: false },
    { item: "Svelte", isSelected: false },
  ];

  return (
    <div className="App">
      <h1>Transfer List</h1>
      <TransferList List1={List1} List2={List2} />
    </div>
  );
}

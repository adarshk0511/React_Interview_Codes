import GridLights from "./components/gridLights";
import "./styles.css";

export default function App() {
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  return (
    <div className="App">
      <h1>Grid Lights</h1>
      <GridLights config={config} />
    </div>
  );
}

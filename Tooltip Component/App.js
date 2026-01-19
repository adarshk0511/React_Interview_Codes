import ToolTip from "./components/tooltip";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Tooltip Component</h1>
      <ToolTip content="This is a tooltip" position="right">
        <button>Hover me</button>
      </ToolTip>
    </div>
  );
}

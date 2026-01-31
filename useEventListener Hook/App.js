import useEventListener from "./hooks/useEventListener";
import "./styles.css";

export default function App() {
  // useEventListener(eventType, handler, element);
  useEventListener("resize", () => console.log("resized"), window);

  return (
    <div className="App">
      <h1>useEventListener Hook</h1>
    </div>
  );
}

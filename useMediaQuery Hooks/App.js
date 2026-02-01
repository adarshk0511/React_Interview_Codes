import useMediaQuery from "./hooks/useMediaQuery";
import "./styles.css";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  console.log(isMobile);
  return (
    <div className="App">
      <h1>useMediaQuery Hooks</h1>
      <h3> {isMobile ? "Mobile View 📱" : "Desktop View 💻"}</h3>
    </div>
  );
}

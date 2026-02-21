import Accordion from "./components/Accordion";
import { faqs } from "./data/faqs";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Accordion2</h1>
      <Accordion faqs={faqs} />
    </div>
  );
}

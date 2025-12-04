import Accordion from "./components/accordion";
import "./styles.css";

export default function App() {
  const faqs = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building user interfaces.",
    },
    {
      question: "What is a component?",
      answer: "A component is a reusable piece of UI logic in React.",
    },
    {
      question: "What is useState?",
      answer:
        "useState is a React Hook that lets you add state to functional components.",
    },
    {
      question: "What is JSX?",
      answer:
        "JSX is a syntax extension that allows writing HTML inside JavaScript.",
    },
  ];

  return (
    <div className="App">
      <h1>Accordion</h1>
      <Accordion faqs={faqs} />
    </div>
  );
}

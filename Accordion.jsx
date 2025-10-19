import React, { useState } from 'react';

function App() {
  
  const [visibleIndex, setVisibleIndex] = useState(null);
  
 const faqs = [
  {
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    question: "What is a component?",
    answer: "A component is a reusable piece of UI logic in React."
  },
  {
    question: "What is useState?",
    answer: "useState is a React Hook that lets you add state to functional components."
  },
  {
    question: "What is JSX?",
    answer: "JSX is a syntax extension that allows writing HTML inside JavaScript."
  }
];

  return (
    <div>
      <h1>Hello Timer!</h1>
     
     <ul>
       {faqs.map((faq, key) => (
          <div style={{border : "1px solid black"}} key={key} onClick={()=>{setVisibleIndex(visibleIndex === key ? null: key)}}>
            <strong>{faq.question}</strong>
           {visibleIndex === key && <p>{faq.answer}</p>}
          </div>
       ))}
     </ul> 
    </div>
  );
}

export default App;

import { useState } from "react";

const Accordion = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleChange = (index) => {
    setOpenIndex(openIndex == index ? null : index);
  };
  return (
    <div className="accordion">
      {faqs.map((item, index) => {
        return (
          <div key={index} className="accordion-item">
            <button
              className="accordion-title"
              onClick={() => handleChange(index)}
            >
              {item.question}
            </button>
            {index === openIndex && (
              <div className="accordion-content">{item.answer}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

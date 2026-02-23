import { useState } from "react";

const Accordion = ({ faqs }) => {
  //Handeling of multiple faqs simultaneously
  const [openIdx, setOpenIdx] = useState([]);

  const handleClick = (index) => {
    setOpenIdx((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  return (
    <div className="container">
      {faqs.map((item, index) => {
        return (
          <div>
            <p className="question" onClick={() => handleClick(index)}>
              {item.question}
            </p>
            {openIdx.includes(index) && (
              <p className="answer">{item.answer} </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;


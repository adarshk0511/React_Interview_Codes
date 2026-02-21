import { useState } from "react";

const Accordion = ({ faqs }) => {
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
    <div>
      {faqs.map((item, index) => {
        return (
          <div>
            <p onClick={() => handleClick(index)}>{item.question}</p>
            {openIdx.includes(index) && <p>{item.answer} </p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;

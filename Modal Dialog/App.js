import { useState } from "react";
import "./styles.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(true);

  const closeForm = () => {
    setIsOpen(false);
  };
  return (
    <div className="App">
      <h1>Modal Dialog</h1>
      {!isOpen && <button onClick={(e) => setIsOpen(true)}>Fill a form</button>}

      {isOpen && (
        <div className="overlay" onClick={closeForm}>
          <div className="form" onClick={(e) => e.stopPropagation()}>
            <button className="cross" onClick={closeForm}>
              ❌
            </button>

            <div className="input_div">
              <label>First Name</label>
              <input type="text" placeholder="Enter the first name" />
            </div>

            <div className="input_div">
              <label>Last Name</label>
              <input type="text" placeholder="Enter a last name" />
            </div>

            <div className="input_div">
              <label>Email address</label>
              <input type="text" placeholder="Enter a email" />
            </div>

            <button className="submit-button" onClick={closeForm}>
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

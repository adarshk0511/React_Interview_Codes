import { useState } from "react";
import "./styles.css";

export default function App() {
  const [errors, setErrors] = useState({});
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const err = {};
    //Form Data validation
    const name = formData.get("name");
    const email = formData.get("email");
    const number = formData.get("phone");
    const message = formData.get("message");

    //Data validation
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regexNum = /^\d{1,3}\s?\d{1,14}$/;

    if (!name || name.trim().length === 0) {
      err.name = "Enter a name";
    }
    if (!regex.test(email)) {
      err.email = "Enter a vaild mail";
    }
    if (!number || number.length < 0 || !regexNum.test(number)) {
      err.number = "Enter your phone number";
    }
    if (!message || message.length < 0) {
      err.message = "Type your message ";
    }
    if (message.length > 250) {
      err.message = "Max 250 characters";
    }

    setErrors(err);

    if (Object.keys(err).length > 0) return;

    form.reset();
    alert("Form submitted");
  };
  return (
    <div className="App">
      <h1>Contact Form</h1>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name" id="name">
          {" "}
          Name : <input type="text" name="name" placeholder="Enter the name" />
          {errors.name && <span className="warning">{errors.name}</span>}
        </label>
        <label htmlFor="email" id="email">
          {" "}
          Email :{" "}
          <input type="text" name="email" placeholder="Enter the email" />
          {errors.email && <span className="warning">{errors.email}</span>}
        </label>
        <label htmlFor="phone" id="phone">
          {" "}
          Phone number :{" "}
          <input
            type="text"
            name="phone"
            placeholder="Enter the phone number"
          />
        </label>
        {errors.number && <span className="warning">{errors.number}</span>}
        <label htmlFor="message" id="message">
          {" "}
          Querry : <textarea name="message" maxLength={250}></textarea>
          {errors.message && <span className="warning">{errors.message}</span>}
        </label>

        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

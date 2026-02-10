import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    place: "",
  });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveForm = (data) => {
    setStatus("saving..");

    setTimeout(() => {
      console.log("Saved data: " + data);
      setStatus("saved");
    }, 600);
  };

  useEffect(() => {
    if (!formData.name && !formData.email && !formData.place) return;

    setStatus("Idle");
    const timer = setTimeout(() => {
      saveForm(formData);
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [formData]);

  return (
    <div className="App">
      <h1>Auto-Save Form</h1>

      <form className="form" action="">
        <label htmlFor="">
          Name: <input type="text" name="name" onChange={handleChange} />
        </label>
        <label htmlFor="">
          Email: <input type="text" name="email" onChange={handleChange} />
        </label>
        <label htmlFor="">
          Place: <input type="text" name="place" onChange={handleChange} />
        </label>
      </form>

      <h3>Status: {status}</h3>
    </div>
  );
}

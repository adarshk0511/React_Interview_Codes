import { useState } from "react";
import "./styles.css";

//https://www.youtube.com/watch?v=EirBuUUPbio

const COUNTRIES = [
  {
    name: "India",
    value: "IN",
    cities: ["Delhi", "Mumbai"],
  },
  {
    name: "Pak",
    value: "PK",
    cities: ["Lahore", "Karachi"],
  },
  {
    name: "Bangladesh",
    value: "BG",
    cities: ["Dhaka", "Chittagong"],
  },

  // === Added more ===
  {
    name: "Sri Lanka",
    value: "SL",
    cities: ["Colombo", "Kandy"],
  },
  {
    name: "Nepal",
    value: "NP",
    cities: ["Kathmandu", "Pokhara"],
  },
  {
    name: "Bhutan",
    value: "BT",
    cities: ["Thimphu", "Paro"],
  },
];

export default function App() {
  const [cities, setCities] = useState([]);

  const handleCity = (countryName) => {
    const selectedCountry = COUNTRIES.find(
      (country) => country.name === countryName
    );

    if (!selectedCountry) {
      setCities([]);
      return;
    }

    setCities(selectedCountry.cities);
  };
  return (
    <div className="App">
      <h1>Country → City Selector</h1>

      <select onChange={(e) => handleCity(e.target.value)}>
        <option value="">Select Country</option>
        {COUNTRIES.map(({ name, value }) => (
          <option key={value} value={name}>
            {name}
          </option>
        ))}
      </select>

      <select>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
}

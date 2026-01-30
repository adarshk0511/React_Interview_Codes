import { useState, useEffect } from "react";

const useLocalStorage = (key, initialValue) => {
  // 1️⃣ Lazy initialization: read from localStorage only once
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);

      // If value exists in localStorage, parse and return it
      if (storedValue !== null) {
        return JSON.parse(storedValue);
      }

      // Otherwise fallback to initialValue
      return initialValue;
    } catch (error) {
      console.error("Error reading localStorage:", error);
      return initialValue;
    }
  });

  // 2️⃣ Sync React state → localStorage
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Error writing to localStorage:", error);
    }
  }, [key, value]);

  // 3️⃣ Setter that behaves like useState (supports functional updates)
  const setStoredValue = (newValue) => {
    setValue((prevValue) =>
      typeof newValue === "function" ? newValue(prevValue) : newValue
    );
  };

  return [value, setStoredValue];
};

export default useLocalStorage;

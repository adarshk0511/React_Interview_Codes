import React, { useState, useCallback } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function handleChange(event) {
    setCounter(prev => prev + 1);
  }

  function throttle(fn, delay) {
    let lastCall = 0;
    return function(...args) {
      const now = Date.now();
      if (now - lastCall >= delay) {
        fn(...args);
        lastCall = now;
      }
    }
  }


  const handleThrottleInput = useCallback(throttle(handleChange, 600), []);

  return (
    <div>
      <h1>Hello, World!</h1>
      <input  onChange={handleThrottleInput} />
      <h3>{counter}</h3>
    </div>
  );
}

export default App;

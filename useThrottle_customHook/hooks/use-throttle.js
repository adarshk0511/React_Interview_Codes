import { useEffect, useRef, useState } from "react";

const useThrottle = (value, delay) => {
  const [throttleValue, setThrottleValue] = useState(value);

  const lastExecuted = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(() => {
      const now = Date.now();
      const timerElapsed = now - lastExecuted.current;

      if (timerElapsed >= delay) {
        setThrottleValue(value);
        lastExecuted.current = now;
      }
    }, delay - (Date.now() - lastExecuted.current));

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return throttleValue;
};

export default useThrottle;

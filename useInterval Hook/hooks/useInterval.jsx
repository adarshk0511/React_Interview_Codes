import { useEffect, useRef } from "react";

const useInterval = (callback, delay = 1000) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay == null) return;

    const timer = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => {
      clearInterval(timer);
    };
  }, [delay]);
  return;
};

export default useInterval;

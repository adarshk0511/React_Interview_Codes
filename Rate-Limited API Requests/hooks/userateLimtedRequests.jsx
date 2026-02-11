import { useEffect, useRef } from "react";

function userateLimtedRequests({ limit, interval }) {
  const requestCountRef = useRef(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      requestCountRef.current = 0;
    }, interval);

    return () => clearInterval(timerRef.current);
  }, [interval]);

  const rateLimitedRequest = (requestFn) => {
    if (requestCountRef.current >= limit) {
      console.log("Limit reached ");
      return;
    }

    console.log(requestCountRef.current);
    requestCountRef.current += 1;
    requestFn();
  };

  return rateLimitedRequest;
}

export default userateLimtedRequests;

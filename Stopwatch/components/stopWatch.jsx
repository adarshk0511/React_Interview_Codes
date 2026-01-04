import { useEffect, useState } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;

    if (isRunning) {
      timer = setInterval(() => {
        setTime((prev) => prev + 10);
      }, 10);
    } else {
      clearInterval(timer);
    }

    return () => clearInterval(timer);
  }, [isRunning]);

  const formattedTime = (time) => {
    const milliseconds = ("0" + Math.floor((time / 10) % 100)).slice(-2);
    const seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
    const minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return (
    <div>
      <h3>{formattedTime(time)}</h3>

      <button onClick={() => setIsRunning(true)}>▶️</button>
      <button onClick={() => setIsRunning(false)}>⏸️</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        🔁
      </button>
    </div>
  );
};

export default Stopwatch;

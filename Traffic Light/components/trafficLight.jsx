import { useState, useEffect } from "react";

const COLORS = ["green", "yellow", "red"];

const TrafficLight = ({ interval = 5 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % COLORS.length);
    }, interval * 1000);

    return () => clearInterval(id); // cleanup
  }, [interval]);

  const color = COLORS[index];

  return (
    <div className="box">
      <div className={`sign ${color === "green" ? "active" : ""}`}>🟢</div>
      <div className={`sign ${color === "yellow" ? "active" : ""}`}>🟡</div>
      <div className={`sign ${color === "red" ? "active" : ""}`}>🔴</div>
    </div>
  );
};

export default TrafficLight;

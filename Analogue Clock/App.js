import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [sec, setSec] = useState(new Date().getSeconds());
  const [min, setMin] = useState(new Date().getMinutes());
  const [hr, setHr] = useState(new Date().getHours() % 12);
  useEffect(() => {
    let timer = setInterval(() => {
      const now = new Date();
      const hours = now.getHours() % 12;
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();

      setSec(seconds);
      setMin(minutes);
      setHr(hours);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  //-90 because of rotate() will set the hand to 3o clock initially
  const secondAngle = sec * 6 - 90;
  const minuteAngle = min * 6 + sec * 0.1 - 90;
  const hourAngle = hr * 30 + min * 0.5 - 90;

  return (
    <div className="App">
      <h1>Analogue Clock</h1>
      <div className="clock">
        <div className="numbers">
          {Array.from({ length: 12 }, (_, i) => (
            <div
              className="number"
              style={{
                transform: `rotate(${i * 30}deg) translateY(-90px) rotate(-${
                  i * 30
                }deg)`,
              }}
            >
              {i === 0 ? 12 : i}
            </div>
          ))}
        </div>

        <div
          className="hand hour"
          style={{ transform: `translateY(-50%) rotate(${hourAngle}deg)` }}
        ></div>
        <div
          className="hand minute"
          style={{ transform: `translateY(-50%) rotate(${minuteAngle}deg)` }}
        ></div>
        <div
          className="hand second"
          style={{ transform: ` translateY(-50%) rotate(${secondAngle}deg)` }}
        ></div>
      </div>
    </div>
  );
}

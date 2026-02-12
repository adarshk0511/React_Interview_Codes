import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(10);

  const inactivityTimerRef = useRef(null);
  const countdownTimerRef = useRef(null);

  const handleLogout = () => {
    clearTimeout(inactivityTimerRef.current);
    clearInterval(countdownTimerRef.current);
    console.log("Session expired. Logging out...");
  };

  const triggerWarning = () => {
    setShowModal(true);

    countdownTimerRef.current = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownTimerRef);
          handleLogout();
          return 0;
        }

        return prev - 1;
      });
    }, 1000);
  };

  const resetTimers = () => {
    clearTimeout(inactivityTimerRef);
    clearInterval(countdownTimerRef);

    setShowModal(false);
    setCountdown(10);

    inactivityTimerRef.current = setTimeout(() => {
      triggerWarning();
    }, 20000);
  };

  useEffect(() => {
    const events = ["mousemove", "keydown", "click", "scroll"];

    const activityHandler = () => {
      resetTimers();
    };

    events.forEach((event) => {
      window.addEventListener(event, activityHandler);
    });

    resetTimers();

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, activityHandler);
      });
      clearTimeout(inactivityTimerRef.current);
      clearInterval(countdownTimerRef.current);
    };
  }, []);
  return (
    <div className="App">
      <h1>Session Timeout Warning Modal</h1>
      <h5>{countdown}</h5>
      <div>
        {showModal && (
          <div style={{ border: "1px solid red", padding: "10px" }}>
            <p>Session expires in {countdown} seconds</p>
            <button onClick={resetTimers}>Stay Logged In</button>
          </div>
        )}
      </div>
    </div>
  );
}

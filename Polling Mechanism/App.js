import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [status, setStatus] = useState("OFFLINE");
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchData = () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          status: Math.random() > 0.5 ? "ONLINE" : "OFFLINE",
          timestamp: new Date().toLocaleTimeString(),
        });
      }, 500);
    });

  useEffect(() => {
    const poll = async () => {
      const data = await fetchData();
      setStatus(data.status);
      setLastUpdated(data.timestamp);
    };

    poll();

    const timer = setInterval(poll, 2000);

    return () => clearInterval(timer);
  }, [status]);
  return (
    <div className="App">
      <h1>Polling Mechanism</h1>
      <span>{status == "ONLINE" ? "🟢" : "🔴"}</span>
      <span>{status}</span>
      <p>Last Seen: {lastUpdated}</p>
    </div>
  );
}

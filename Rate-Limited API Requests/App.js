import userateLimtedRequests from "./hooks/userateLimtedRequests";
import "./styles.css";

export default function App() {
  const rateLimitedFetch = userateLimtedRequests({
    limit: 5,
    interval: 5000,
  });

  return (
    <div className="App">
      <h1>Rate-Limited API Requests</h1>
      <button
        onClick={() =>
          rateLimitedFetch(() => {
            const now = new Date();
            console.log("API call at", now.toLocaleTimeString());
          })
        }
      >
        Call API
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { mockApiCall } from "./api/mockApi";
import { retryWithBackoff } from "./utils/retryWithBackoff";
import "./styles.css";

export default function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let isMounted = true;

    const fetchWithRetry = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await retryWithBackoff(
          mockApiCall,
          3,
          1000,
          (a) => isMounted && setAttempt(a)
        );

        console.log(result);
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err.message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchWithRetry();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="App">
      <h1>Retry Logic for API Calls</h1>

      {loading && <p>Loading... (Attempt {attempt})</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}
      {data && (
        <p>
          ✅ {data.message} <br />
          <small>{data.time}</small>
        </p>
      )}
    </div>
  );
}

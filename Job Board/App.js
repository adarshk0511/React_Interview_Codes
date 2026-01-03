import { useEffect, useState } from "react";
import JobsList from "./components/jobList";
import "./styles.css";

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState([]);

  const fetchIds = async () => {
    try {
      const res = await fetch(
        "https://hacker-news.firebaseio.com/v0/jobstories.json"
      );
      const jobIds = await res.json();

      console.log(jobIds);
      setData(jobIds);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  useEffect(() => {
    fetchIds();
  }, []);
  return (
    <div className="App">
      {error && <div>{error}</div>}
      <h1>Job Board</h1>
      <JobsList data={data} />
    </div>
  );
}

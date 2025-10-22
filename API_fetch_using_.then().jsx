import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message || "Something went wrong!");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h4>Post List</h4>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
           <h5>{item.title}</h5>  : {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

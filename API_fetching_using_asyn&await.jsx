import React, { useState, useEffect } from 'react';

function App() {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        
        if (!response.ok) { 
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
 
 if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
       <h4>Post List</h4>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h5>{item.title}</h5> : {item.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

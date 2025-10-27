import React from 'react';
import { useState, useEffect } from 'react'

const useFetch = (url)=>{
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error , setError] = useState(null);
  
  useEffect(()=>{
    let isMounted = true;
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
      if(isMounted){
        setData(data);
        setLoading(false);
      }
    })
    .catch((error)=> {
      if(isMounted){
        setError(error);
        setLoading(false);
      }
    });
    
    return ()=>{
      isMounted =false;
    }
    
  }, [url]);
  
  return { data, loading, error };
  
}

function App() {
 const {data , loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) {
    return <p>loading.....</p>
  }
    
  if(error){
    return <p>Error : {error.message}</p>
  }
  return (
    <div >
      <h1 >Fetched data</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <h5>{item.title}</h5> : {item.body}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App

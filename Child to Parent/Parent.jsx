import React, { useState } from 'react';
import Child from "./Child";
function App() {
  
  const [message, setMessage] = useState(null);
  
  const handleChildData = (dataFromChild) => {
    setMessage(dataFromChild);
  }
 
 

  return (
    <div>
      <h1>Parent element</h1>
      <h4>{message}</h4>
      
     <Child sendDataToParent={handleChildData}/>
    </div>
  );
}

export default App;

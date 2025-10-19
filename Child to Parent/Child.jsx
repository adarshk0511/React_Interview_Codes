import React, { useState } from 'react';


const Child = ({ sendDataToParent }) => {
  const [message, setMessage] = useState("");
  
   const handleInput = (e) => {
     const value = e.target.value;
  setMessage(value);
  sendDataToParent(value)
   }
  return (
    <div>
      <h1>Child Component</h1>
      <input type="text" onChange={handleInput}/> 
    </div>
   
  );
};

export default Child;

import React, { useState, useEffect } from 'react';

function App() {
  const [time, setTime] = useState(0);//milliseconds
  const [isRunning, setIsRunning] = useState(false);

  useEffect(()=>{
    let timer;
    
    if(isRunning){
      timer = setInterval(()=>{
        setTime((prevTime)=> prevTime+10);
      }, 10);
    }
    else{
      clearInterval(timer);
    }
    
    return() => clearInterval(timer);
  }, [isRunning]);


  const formatedTime = (time) => {
    const milliseconds = ("0" + ((time/10)% 100)).slice(-2);
    const seconds = ("0" + Math.floor((time/1000)%60)).slice(-2);
    const minutes = ("0"+ Math.floor((time/60000)%60)).slice(-2);
    
    return `${minutes}:${seconds}:${milliseconds}`;
  }


  return (
    <div>
      <h1>Hello Timer!</h1>
      
      <h3>{formatedTime(time)}</h3>
       <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
      
    </div>
  );
}

export default App;

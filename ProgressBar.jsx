import React,{useState, useEffect} from 'react';
import "./styles.css"
const ProgressBar = ({value=0}) =>{
  
  const [percent, setPercent] = useState(value);
  const target = 70;
  useEffect(() => {
    const interval = setInterval(() => {
      if (percent < target) setPercent(percent + 1);
      else clearInterval(interval);
    }, 50);

    return () => clearInterval(interval);
  }, [value]);
  
  return(
    <div className="progress">
      <span style={{color: percent> 49 ? "white" :"black"}}>{percent.toFixed()}%</span>
      <div style={{width: `${percent}%`}}/>
    </div>  
  )
};

const App = () => {
  
  const [value, setValue] = useState(0);
  
  useEffect(()=>{
    setInterval(()=>{
      setValue((val) => val+1);
    }, 50);
  }, [])
  
  return (
    <div className="app">
      <span>Progress Bar</span>
      <ProgressBar value={value}/>
    </div>
  );
};

export default App;



=============================== styles.css ==========================================

  .app{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
}

.progress{
  height: 20px;
  width: 300px;
  background-color: rgb(233, 236, 239);
  border: 1px solid black;
  border-radius: 15px;
  overflow: hidden;
   position: relative;
}

.progress div {
  height: 100%;
  background-color: #00c251;
  position: absolute;
  left: 0;
  top: 0;
}

.progress span {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  z-index: 2;
}


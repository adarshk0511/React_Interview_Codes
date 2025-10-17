import React, { useState } from 'react';

function App() {

  const [inputValue, setInputValue] = useState('');
  const [counter, setCounter] = useState(0);
  
  function handleChange(event) {
      setInputValue(event.target.value);
      setCounter(counter+1);
  }
  
  
   const handleDebounce = function (fn, d){
    let timer;
    return function(){
      let context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function() {handleChange.apply(context, args)}, d);
    }
  }
  
  const handleDebounceInput = handleDebounce(handleChange, 300)

  return (
    <div >
      <h1 >Hello, World!</h1>

      <input onChange={handleDebounceInput} />
      
      <h3>{counter}</h3>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  
  const [text, setText] = useState("");
  const [todo, setTodo] = useState([]);
  

  const addTodo =()=> {
      if(text){
        setTodo([...todo, {text, completed: false}])
        setText("");
      }
  }
  
  const toggleTodo = index => {
    const newTodo = [...todo];
    newTodo[index].completed = ! newTodo[index].completed;
    setTodo(newTodo);
  }
  
  const removeTodo = index => {
    const newTodo = [...todo];
    newTodo.splice(index, 1);
    setTodo(newTodo);
  }
 
 

  return (
    <div>
      <h4>Add to list</h4>
      <input type="text" name="todo" onChange={(e) => setText(e.target.value)} placeholder="Add items in list" />
      <button onClick={addTodo}>➕</button>
      
      <br></br>
      
      <h4>Current Activities</h4>
      {todo.length<=0 && <p>No Activities yet</p>}
      <ol>
        {todo.map((to, index)=>(
        
        <li key={index} style={{textDecoration: to.completed? 'line-through': 'none'}}>
          {to.text}
          <button onClick={() => toggleTodo(index)}>🔂</button>
          <button onClick={() => removeTodo(index)}>❌</button>
        </li>
        ))}
        
      </ol>
    </div>
  );
}

export default App;

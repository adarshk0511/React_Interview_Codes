import React, { useState } from 'react';

const Dropdown = ({items}) => {
   const [isOpen, setIsOpen ] = useState(false);
   
   return (
     <div>
       
       <button onClick={()=>setIsOpen(!isOpen)}>Menu</button>
       
       {isOpen && 
          <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
       }
     </div>
    );
  
};

function App() {
  const items = ['Profile', 'Settings', 'Logout'];
  return (
    <div>
      <h1>Dropdown element</h1>
   
     <Dropdown items={items}/>
    </div>
  );
}

export default App;

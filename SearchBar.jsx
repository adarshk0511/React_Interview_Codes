import React, { useState, useEffect } from 'react';

const SearchBar = ({items}) =>{
  
  const [query, setQuery] = useState("");
  
  const filteredItems = items.filter(item => 
  item.toLowerCase().includes(query.toLowerCase()));
  
  return(
    <div>
      <input type="text" value={query} onChange={(e)=>(setQuery(e.target.value))} placeholder="Search.." />
      
      <ul>
        {filteredItems.map((item, index) => (
          <li>{item}</li>
        ))}
        
      </ul>
    </div>
    
    );
};

function App() {
  const items = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
  
  return (
    <div>
       <h4>Post List</h4>
      <SearchBar items={items}/>
    </div>
  );
}

export default App;

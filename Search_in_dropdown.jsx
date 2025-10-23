import React, { useState, useEffect } from 'react';

const SearchBar = ({items}) =>{
  
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  
  const handleSearch = (e) => {
    const val = e.target.value;
    setQuery(val);
    
    const filtered = items.filter(item => 
    item.toLowerCase().includes(val.toLowerCase()));
    
    setFilteredItems(filtered);
    
  }
 
  
  return(
    <div>
      <input type="text" value={query} onChange={handleSearch} placeholder="Search.." />
      
      <select>
        {filteredItems.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
        
      </select>
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

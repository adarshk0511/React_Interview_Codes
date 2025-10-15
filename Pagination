import React, { useState } from 'react';

function App() {
  const todo = [
    { activity: "ACT1", done: true },
    { activity: "ACT2", done: false },
    { activity: "ACT3", done: true },
    { activity: "ACT4", done: false },
    { activity: "ACT5", done: true },
    { activity: "ACT6", done: false },
    { activity: "ACT7", done: true },
    { activity: "ACT8", done: false },
    { activity: "ACT9", done: true },
    { activity: "ACT10", done: false },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = todo.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(todo.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handlePageClick = (pageNum) => {
    setCurrentPage(pageNum);
  };

  return (
    <div>
      <h1>Hello, World!</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>
            {item.activity} — {item.done ? "✅ Done" : "❌ Pending"}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "1rem" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>

        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            onClick={() => handlePageClick(i + 1)}
            style={{
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
              margin: "0 5px",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button onClick={handleNext} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;

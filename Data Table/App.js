import { useState } from "react";
import { users } from "./data/usersData";
import "./styles.css";

const rowsPerPage = 3;

export default function App() {
  const [currentPage, setCurrentPage] = useState(0);

  const startingIdx = currentPage * rowsPerPage;
  const endIdx = Math.min(startingIdx + rowsPerPage, users.length);
  const numberOfPages = Math.ceil(users.length / rowsPerPage);

  const visibleRows = users.slice(startingIdx, endIdx);

  const handleNext = () => {
    setCurrentPage((prev) => {
      return Math.min(numberOfPages - 1, prev + 1);
    });
  };

  const handlePrev = () => {
    setCurrentPage((prev) => {
      return Math.max(0, prev - 1);
    });
  };

  return (
    <div className="App">
      <h1>Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {visibleRows.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "flex" }}>
        <button onClick={handlePrev} disabled={currentPage === 0}>
          ◀️
        </button>

        <div>
          {[...Array(numberOfPages).keys()].map((idx) => (
            <button key={idx} onClick={() => setCurrentPage(idx)}>
              {idx + 1}
            </button>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={currentPage === numberOfPages - 1}
        >
          ▶️
        </button>
      </div>
    </div>
  );
}

import { useState } from "react";
import "./styles.css";
//https://www.youtube.com/watch?v=QcNGBtnT7BI

const arr = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];

export default function App() {
  const [list, setList] = useState(arr);
  const [checkedList, setCheckedList] = useState([]);

  const handleDel = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const handleCheck = (isChecked, index) => {
    setCheckedList((prev) => {
      const newState = { ...prev, [index]: isChecked };
      return newState;
    });
  };
  return (
    <div className="App">
      <h1>List</h1>
      <div>
        {list.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              name=""
              id=""
              checked={checkedList[index]}
              onChange={(e) => handleCheck(e.target.checked, index)}
            />
            <span>{item}</span>
            {checkedList[index] && (
              <button onClick={() => handleDel(index)}>x</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

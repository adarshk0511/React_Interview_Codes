import { useState } from "react";

const TransferList = ({ List1, List2 }) => {
  const [list1, setList1] = useState(List1);
  const [list2, setList2] = useState(List2);

  const toggleSelect1 = (index) => {
    setList1((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const toggleSelect2 = (index) => {
    setList2((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  };

  const moveRight = () => {
    const selected = list1.filter((i) => i.isSelected);
    const remaining = list1.filter((i) => !i.isSelected);

    setList1(remaining);
    setList2((prev) => [
      ...prev,
      ...selected.map((i) => ({ ...i, isSelected: false })),
    ]);
  };

  const moveAllRight = () => {
    const selected = list1;

    setList1([]);
    setList2((prev) => [
      ...prev,
      ...selected.map((i) => ({ ...i, isSelected: false })),
    ]);
  };

  const moveLeft = () => {
    const selected = list2.filter((i) => i.isSelected);
    const remaining = list2.filter((i) => !i.isSelected);

    setList2(remaining);
    setList1((prev) => [
      ...prev,
      ...selected.map((i) => ({ ...i, isSelected: false })),
    ]);
  };

  const moveAllLeft = () => {
    const selected = list2;

    setList2([]);
    setList1((prev) => [
      ...prev,
      ...selected.map((i) => ({ ...i, isSelected: false })),
    ]);
  };

  return (
    <div className="box">
      <div className="list">
        <ul>
          {list1.map((obj, index) => {
            return (
              <li key={obj.item}>
                {" "}
                <input
                  type="checkbox"
                  checked={obj.isSelected}
                  onChange={() => toggleSelect1(index)}
                />{" "}
                {obj.item}
              </li>
            );
          })}
        </ul>
      </div>

      <div className="functions">
        <button disabled={list1.length < 1} onClick={moveRight}>
          ▶️
        </button>
        <button disabled={list2.length < 1} onClick={moveLeft}>
          ◀️
        </button>
        <button disabled={list1.length < 1} onClick={moveAllRight}>
          ⏭️
        </button>
        <button disabled={list2.length < 1} onClick={moveAllLeft}>
          ⏮️
        </button>
      </div>

      <div className="list">
        <ul>
          {list2.map((obj, index) => {
            return (
              <li key={obj.item}>
                {" "}
                <input
                  type="checkbox"
                  checked={obj.isSelected}
                  onChange={() => toggleSelect2(index)}
                />{" "}
                {obj.item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TransferList;

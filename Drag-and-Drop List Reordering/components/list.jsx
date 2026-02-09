import { useState } from "react";

const List = ({ list, setList }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDrop = (dropIndex) => {
    if (dropIndex == draggedIndex || draggedIndex == null) return;

    setList((prevItems) => {
      const updatedItem = [...prevItems];
      const [movedItem] = updatedItem.splice(draggedIndex, 1);
      updatedItem.splice(dropIndex, 0, movedItem);

      return updatedItem;
    });

    setDraggedIndex(null);
  };

  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {list.map((item, index) => {
          return (
            <li
              key={item.id}
              draggable
              onDragStart={() => setDraggedIndex(index)}
              onDragOver={(e) => e.preventDefault()}
              onDrop={() => handleDrop(index)}
              className="item"
            >
              {item.text}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;

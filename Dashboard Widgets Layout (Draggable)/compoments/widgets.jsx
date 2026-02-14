import { useState } from "react";

const Widgets = ({ widgets, setWidgets }) => {
  const [draggedIndex, setDraggedIndex] = useState(null);
  const handleDrop = (droppedIndex) => {
    if (droppedIndex == null || draggedIndex == droppedIndex) return;

    setWidgets((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(draggedIndex, 1);
      updated.splice(droppedIndex, 0, moved);

      return updated;
    });
  };
  return (
    <div className="dashboard">
      {widgets.map((widget, index) => {
        return (
          <div
            key={widget.id}
            className="widget"
            draggable
            onDragStart={() => setDraggedIndex(index)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(index)}
          >
            <h4>{widget.title}</h4>
            <p>{widget.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Widgets;

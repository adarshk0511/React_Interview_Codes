import { useEffect, useRef, useState } from "react";
import "./styles.css";

export default function App() {
  const [leftWidth, setLeftWidth] = useState(300);

  const containerRef = useRef(null);
  const isDraggingRef = useRef(false);

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDraggingRef.current) return;

    const containerLeft = containerRef.current.getBoundingClientRect().left;
    const newWidth = e.clientX - containerLeft;

    setLeftWidth(newWidth);
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="App">
      <h1>Resizable Panels</h1>
      <div ref={containerRef} className="container">
        <div className="left-panel" style={{ width: leftWidth }}>
          <span> Panel A</span>
        </div>
        <div
          className="resizer"
          onMouseDown={(e) => {
            e.preventDefault();
            isDraggingRef.current = true;
          }}
        />
        <div className="right-panel">
          <span> Panel B</span>
        </div>
      </div>
    </div>
  );
}

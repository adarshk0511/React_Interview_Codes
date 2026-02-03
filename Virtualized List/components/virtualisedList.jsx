import { useCallback, useRef, useState } from "react";
const OVERSCAN = 3;
const VirtualisedList = ({ items, height, itemHeight }) => {
  const [scrollTop, setScrollTop] = useState(0);
  const viewportRef = useRef(null);

  const totalHeight = itemHeight * items.length;

  const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - OVERSCAN);
  const visibleIndex = Math.ceil(startIndex + height / itemHeight) + OVERSCAN;
  const endIndex = Math.min(items.length - 1, startIndex + visibleIndex);

  const visibleItem = items.slice(startIndex, endIndex + 1);

  const handleScroll = useCallback(() => {
    if (!viewportRef.current) return;

    setScrollTop(viewportRef.current.scrollTop);
  }, []);

  return (
    <div
      ref={viewportRef}
      onScroll={handleScroll}
      style={{
        height,
        overflowY: "auto",
        position: "relative",
        border: "1px solid black",
      }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: startIndex * itemHeight,
            width: "100%",
          }}
        >
          {visibleItem.map((item, index) => (
            <div
              key={startIndex + index}
              style={{
                height: itemHeight,
                borderBottom: "1px solid #eee",
                alignContent: "center",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualisedList;

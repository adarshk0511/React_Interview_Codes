import { useState } from "react";
import Cell from "./cell";

const GridLights = ({ config }) => {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);

  const deactivateCells = () => {
    setIsDeactivating(true);
    const timer = setInterval(() => {
      setOrder((origOrder) => {
        const newOrder = origOrder.slice();
        newOrder.pop();

        if (newOrder.length === 0) {
          clearInterval(timer);
          setIsDeactivating(false);
        }

        return newOrder;
      });
    }, 300);
  };
  const addIndex = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };
  return (
    <div>
      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`,
          gap: "4px",
        }}
      >
        {config.flat(1).map((val, index) => {
          return val ? (
            <Cell
              key={index}
              filled={order.includes(index)}
              onClick={() => addIndex(index)}
              isDisbled={order.includes(index) || isDeactivating}
            />
          ) : (
            <span></span>
          );
        })}
      </div>
    </div>
  );
};

export default GridLights;

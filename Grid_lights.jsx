import "./styles.css";
import { useState } from "react";
function Cell({ filled, onClick, isDisbled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={isDisbled}
      className={filled ? "cell cell-activated" : "cell"}
    />
  );
}

export default function App() {
  const [order, setOrder] = useState([]);
  const [isDeactivating, setIsDeactivating] = useState(false);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

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

  const activateCells = (index) => {
    const newOrder = [...order, index];
    setOrder(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };
  return (
    <div className="wrapper">
      <div
        className="grid"
        style={{
          gridTemplateColumns: `repeat(${config[0].length}, 1fr)`, // make the actual grid structure
        }}
      >
        {config
          .flat(1)
          .map((value, index) =>
            value ? (
              <Cell
                key={index}
                filled={order.includes(index)}
                onClick={() => activateCells(index)}
                isDisbled={order.includes(index) || isDeactivating}
              />
            ) : (
              <span />
            )
          )}
      </div>
    </div>
  );
}


// ========================= styles.css ===============================================

//   .App {
//     font-family: sans-serif;
//     text-align: center;
//   }

//   .wrapper {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     gap: 16px;
//   }

//   .grid {
//     display: grid;
//     max-width: 300px;
//     width: 100%;
//     padding: 20px;
//     gap: 20px;
//     border: 1px solid black;
//   }

//   .cell {
//     background-color: transparent;
//     border: 1px solid black;
//     height: 0;
//     padding-bottom: 100%;
//   }

//   .cell-activated {
//     background-color: green;
//   }

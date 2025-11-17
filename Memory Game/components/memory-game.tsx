import { ChangeEvent, useEffect, useState } from "react";
const MemoryGame = () => {
  interface Card {
    id: any;
    number: any;
  }
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState<Array<Card>>([]);

  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const [won, setWon] = useState(false);

  const handleGridSizeChange = (e: any) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) setGridSize(size);
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);

    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffeledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .slice(0, totalCards)
      .map((number, index) => ({ id: index, number }));

    setCards(shuffeledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, [gridSize]);

  const handleClick = (id: any) => {
    if (disabled || won) return;

    if (flipped.length === 0) {
      setFlipped([id]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-grey-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>

      {/* Input */}
      <div className="mb-4">
        <label htmlFor="gridSize" className="mr-2">
          Grid Size: (max 10)
        </label>
        <input
          type="number"
          id="gridSize"
          min={2}
          max={10}
          value={gridSize}
          onChange={(e) => handleGridSizeChange(e)}
          className="border-2 border-grey-300 rounded px-2 py-1"
        />
      </div>

      {/* Board */}
      <div
        className={`grid gap-2 mb-4`}
        style={{
          gridTemplateColumns: `repeat(${gridSize}, minmax(0, 1fr))`,
          width: `min(100%, ${gridSize * 5.5}rem)`,
        }}
      >
        {cards.map((card) => {
          return (
            <div
              key={card.id}
              onClick={handleClick(card.id)}
              className="spect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer transition-all duration-300 bg-gray-300 text-gray-400"
            >
              {card.number}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MemoryGame;

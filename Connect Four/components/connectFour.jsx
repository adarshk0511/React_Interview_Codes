import { useState } from "react";
const ROWS = 6;
const COLS = 7;

const ConnectFour = () => {
  const [board, setBoard] = useState(() =>
    Array.from({ length: ROWS }, () => Array.from({ length: COLS }, () => null))
  );

  const [currentPlayer, setCurrentPlayer] = useState("R");
  const [winner, setWinner] = useState(null);

  const handleColumnClick = (colIndex) => {
    if (winner) return; // stop after game over

    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((row) => [...row]);

      for (let row = ROWS - 1; row >= 0; row--) {
        if (newBoard[row][colIndex] === null) {
          newBoard[row][colIndex] = currentPlayer;

          if (checkWinner(newBoard, row, colIndex, currentPlayer)) {
            setWinner(currentPlayer);
          }

          return newBoard;
        }
      }

      return prevBoard;
    });

    setCurrentPlayer((prev) => (prev === "R" ? "Y" : "R"));
  };

  const checkWinner = (board, row, col, player) => {
    // directions: horizontal, vertical, diagonals
    const directions = [
      [0, 1], // →
      [1, 0], // ↓
      [1, 1], // ↘
      [-1, 1], // ↗
    ];

    for (let [dr, dc] of directions) {
      let count = 1;

      // forward direction
      let r = row + dr;
      let c = col + dc;
      while (
        r >= 0 &&
        r < ROWS &&
        c >= 0 &&
        c < COLS &&
        board[r][c] === player
      ) {
        count++;
        r += dr;
        c += dc;
      }

      // backward direction
      r = row - dr;
      c = col - dc;
      while (
        r >= 0 &&
        r < ROWS &&
        c >= 0 &&
        c < COLS &&
        board[r][c] === player
      ) {
        count++;
        r -= dr;
        c -= dc;
      }

      if (count >= 4) return true;
    }

    return false;
  };

  const getCellColor = (cell) => {
    if (cell === "Y") return "yellow";
    if (cell === "R") return "red";
    return "white";
  };

  return (
    <div>
      {winner && <div className="winner">{winner} is the winner</div>}
      <div
        className="board"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        }}
      >
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              onClick={() => handleColumnClick(colIndex, rowIndex)}
              style={{ backgroundColor: getCellColor(cell) }}
            >
              {cell}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ConnectFour;

import useTicTacToe from "../hooks/use-tic-tac-toe";

const TicTacToe = () => {
  const { board, handleClick, getStatusMessage, resetGame, calculateWinner } =
    useTicTacToe();
  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>

      <div className="status">
        {getStatusMessage()}
        <button className="reset-button" onClick={resetGame}>
          Reset Game
        </button>
      </div>

      <div className="board">
        {board.map((b, index) => {
          return (
            <button
              className="cell"
              key={index}
              onClick={() => handleClick(index)}
              disabled={b !== null}
            >
              {b}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TicTacToe;

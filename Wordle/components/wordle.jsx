import { useEffect, useState } from "react";
import { evaluateGuess } from "../functions/evaluateGuess";

const TARGET_WORD = "BIRDS";
const WORD_LENGTH = TARGET_WORD.length;
const TOTAL_ROWS = 6;

const Wordle = () => {
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("playing");

  useEffect(() => {
    const handlekeyDown = (e) => {
      const key = e.key;
      if (/^[a-zA-Z]$/.test(key)) {
        if (currentGuess.length < WORD_LENGTH) {
          setCurrentGuess((prev) => prev + key.toUpperCase());
        }
        return;
      }

      if (key === "Backspace") {
        setCurrentGuess((prev) => prev.slice(0, -1));
      }

      if (key === "Enter") {
        if (currentGuess.length === WORD_LENGTH) {
          submitGuess();
        }
      }
    };

    window.addEventListener("keydown", handlekeyDown);
    return () => window.removeEventListener("keydown", handlekeyDown);
  }, [currentGuess]);

  const submitGuess = () => {
    const nextGuessCount = guesses.length + 1;

    setGuesses((prev) => [...prev, currentGuess]);

    if (currentGuess === TARGET_WORD) {
      setGameStatus("won");
    } else if (nextGuessCount === 6) {
      setGameStatus("lost");
    }

    setCurrentGuess("");
  };

  return (
    <div className="grid">
      {gameStatus === "won" && <p>🎉 You won!</p>}
      {gameStatus === "lost" && <p>❌ The word was BIRDS</p>}

      {Array.from({ length: TOTAL_ROWS }).map((_, rowIndex) => {
        const isSubmittedRow = rowIndex < guesses.length;
        const isCurrentRow = rowIndex === guesses.length;

        let guess = "";
        let evaluatedGuess = null;

        if (isSubmittedRow) {
          guess = guesses[rowIndex];
          evaluatedGuess = evaluateGuess(guess, TARGET_WORD); // ✅ HERE
        } else if (isCurrentRow) {
          guess = currentGuess;
        }

        return (
          <div className="row" key={rowIndex}>
            {Array.from({ length: WORD_LENGTH }).map((_, colIndex) => {
              const letter = guess[colIndex] || "";
              const status = evaluatedGuess?.[colIndex]?.status;

              return (
                <div className={`cell ${status || ""}`} key={colIndex}>
                  {letter}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Wordle;

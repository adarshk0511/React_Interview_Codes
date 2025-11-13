import "./styles.css";
import questions from "./constants/questions.json";
import { useState } from "react";
import Question from "./components/question";
import Result from "./components/result";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswer, setUserAnswer] = useState([]);

  const handleNextQuestion = (isCorrect) => {
    setCurrentQuestion(currentQuestion + 1);
    setUserAnswer([...userAnswer, isCorrect]);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswer([]);
  };
  return (
    <div className="App">
      <h1>App Quiz</h1>

      {currentQuestion < questions.length && (
        <Question
          question={questions[currentQuestion]}
          onAnswerClick={handleNextQuestion}
        />
      )}

      {currentQuestion === questions.length && (
        <Result
          userAnswer={userAnswer}
          questions={questions}
          resetQuiz={resetQuiz}
        />
      )}
    </div>
  );
}

const Result = ({ userAnswer, questions, resetQuiz = () => {} }) => {
  const correctAnswers = userAnswer.filter((answer) => answer).length;
  return (
    <div className="results">
      <h2>Results</h2>
      <p>
        You answered {correctAnswers} out of {questions.length} questions
      </p>

      <button onClick={resetQuiz}>Click here to Retry</button>
    </div>
  );
};

export default Result;

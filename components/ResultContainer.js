import React from 'react';

function ResultContainer({ score, totalQuestions, handleRestartQuiz }) {
  return (
    <div className="result-container">
      <h1>Quiz Result</h1>
      <p>Your Score: {score}/{totalQuestions}</p>
      <button className="restart-btn" onClick={handleRestartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
}

export default ResultContainer;

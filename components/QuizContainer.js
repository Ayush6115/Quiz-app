import React from 'react';

function QuizContainer({ currentQuestion, questions, selectedOption, handleOptionSelect, handleNextQuestion }) {
  return (
    <div className="quiz-container">
      <h1>Quiz App</h1>
      <div className="question-section">
        <h2>Question {currentQuestion + 1}</h2>
        <p>{questions[currentQuestion].question}</p>
        {selectedOption && (
          <p>Selected Option: {selectedOption}</p>
        )}
      </div>
      <div className="options-section">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        className="next-btn"
        disabled={!selectedOption}
        onClick={handleNextQuestion}
      >
        Next
      </button>
    </div>
  );
}

export default QuizContainer;

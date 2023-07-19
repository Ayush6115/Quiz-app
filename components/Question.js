import React from 'react';

function Question({ question, options, selectedOption, handleOptionSelect }) {
  return (
    <div className="question-section">
      <h2>{question}</h2>
      <div className="options-section">
        {options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selectedOption === option ? 'selected' : ''}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;

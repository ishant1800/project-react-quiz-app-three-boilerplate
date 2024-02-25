import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './styles.css'; // Import your CSS file here

const ResultComponent = () => {
  const location = useLocation();
  const { score, questionsCount } = location.state;

  const calculatePercentage = () => {
    return parseInt((score / 15) * 100); // Assuming there are always 15 questions
  };

  const renderResultStatements = () => {
    const attempted = questionsCount;
    const correctAnswers = score;
    const wrongAnswers = attempted - correctAnswers;

    return (
      <div id="results">
        <div className="resultStatements">
          <p>Total number of questions</p>
          <p>15</p>
        </div>
        <div className="resultStatements">
          <p>Number of attempted questions</p>
          <p>{attempted}</p>
        </div>
        <div className="resultStatements">
          <p>Number of correct answers</p>
          <p>{correctAnswers}</p>
        </div>
        <div className="resultStatements">
          <p>Number of wrong answers</p>
          <p>{wrongAnswers}</p>
        </div>
      </div>
    );
  };

  return (
    <div id="resultComponent">
      <h1 id="ResultComponentHeading">Result</h1>
      <div id="result-container">
        <h3>You need more Practice! </h3>
        <h1 id="scorestatement">Your Score is {calculatePercentage()}%</h1>
        {renderResultStatements()}
      </div>
      <div id="RC-actionsContainer">
        <Link to="/project-react-quiz-app-three/quiz">
          <button className="RC-actions" id="playagain">
            Play Again
          </button>
        </Link>
        <Link to="/project-react-quiz-app-three">
          <button className="RC-actions" id="backtohome">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ResultComponent;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import quizQuestions from './quizQuestion.json';
import './styles.css';

const QuizComponent = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const currentQuestion = quizQuestions[currentQuestionIndex];

    const handleAnswer = (selectedOption) => {
        const correctAnswer = currentQuestion.answer;
        if (selectedOption === correctAnswer) {
            alert("Correct answer");
            setScore(score + 1);
        } else {
            alert("Wrong answer");
        }
        goToNextQuestion();
    };

    const goToNextQuestion = () => {
        const nextQuestionIndex = currentQuestionIndex + 1;
        if (nextQuestionIndex < quizQuestions.length) {
            setCurrentQuestionIndex(nextQuestionIndex);
        }
    };

    const goToPreviousQuestion = () => {
        const previousQuestionIndex = currentQuestionIndex - 1;
        if (previousQuestionIndex >= 0) {
            setCurrentQuestionIndex(previousQuestionIndex);
        }
    };

    const quitQuiz = () => {
        if (window.confirm("Are you sure you want to quit?")) {
            setCurrentQuestionIndex(0);
            setScore(0);
        }
    };

    const renderOptions = () => {
        return (
            <div id="options-container">
                {['optionA', 'optionB', 'optionC', 'optionD'].map((option) => (
                    <button key={option} className="options" onClick={() => handleAnswer(currentQuestion[option])}>
                        {currentQuestion[option]}
                    </button>
                ))}
            </div>
        );
    };

    return (
        <div id="quizComponent">
            <div id="container">
                <h1 id="quizComponentHeading">Question</h1>
                <p id="questionNum">{currentQuestionIndex + 1} of {quizQuestions.length}</p>
                <p id="question">{currentQuestion.question}</p>
                {renderOptions()}
                <div id="actions-container">
                    <button className="actions" onClick={goToPreviousQuestion} id="previous">Previous</button>
                    <button className="actions" onClick={goToNextQuestion} id="next">Next</button>
                    <button className="actions" onClick={quitQuiz} id="quit">Quit</button>
                    <Link to="/project-react-quiz-app-three/result" state={{ score: score, questionsCount: currentQuestionIndex }}>
                        <button className="actions" id="finish">Finish</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default QuizComponent;

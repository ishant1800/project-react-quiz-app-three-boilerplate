import React from 'react';
import './App.css';
import HomeComponent from './components/HomeComponent';
import QuizComponent from './components/QuizComponent';
import ResultComponent from './components/ResultComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/project-react-quiz-app-three" element={<HomeComponent />} />
          <Route path="/project-react-quiz-app-three/quiz" element={<QuizComponent />} />
          <Route path="/project-react-quiz-app-three/result" element={<ResultComponent />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

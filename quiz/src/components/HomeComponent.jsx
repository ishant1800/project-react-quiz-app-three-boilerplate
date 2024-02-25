import React, { Component } from 'react'
import './styles.css'
import { Routes,Route,Link } from 'react-router-dom'
export default class HomeComponent extends Component {
  render() {
    return (
      <div id="homeComponent">
        <h1 id="QuizAPPheading">Quiz App</h1>
       <Link to="/project-react-quiz-app-three/quiz">
       <button id="playbutton">Play</button>
       </Link>
      </div>
    )
  }
}
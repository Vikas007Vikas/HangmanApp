import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameBoard from './components/gameboard';
import HomePage from './components/HomePage';
import LeaderBoard from './components/leaderboard'
import CustomWord from './components/CustomWord';

function App() {
  window.localStorage.removeItem("hangman-word");
  return (
    <Router>
        <Routes>
          <Route exact path="/HangmanApp/gameboard" element={<GameBoard maxGuesses={6} onGameOver={(win) => console.log(win)} />} />
          <Route exact path="/HangmanApp/leaderboard" element={<LeaderBoard />} />
          <Route exact path="/HangmanApp/challenge" element={<CustomWord />} />
          <Route exact path="/HangmanApp/" element={<HomePage />} />
        </Routes>
    </Router>
  );
}

export default App;

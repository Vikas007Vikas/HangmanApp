import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page-container">
        <div className='home-page-box'>
            <div className='home-page-button'>
                <button className="btn btn-primary btn-lg">
                    <Link to="/HangmanApp/gameboard" style={{textDecoration: "None", color: "black"}}>Play</Link>
                </button>
                <button className="btn btn-primary btn-lg">
                    <Link to="/HangmanApp/leaderboard" style={{textDecoration: "None", color: "black"}}>Leaderboard</Link>
                </button>
                <button className="btn btn-primary btn-lg">
                    <Link to="/HangmanApp/challenge" style={{textDecoration: "None", color: "black"}}>Challenge Friend</Link>
                </button>
            </div>
        </div>
    </div>
  );
}

export default HomePage;
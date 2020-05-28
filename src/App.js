import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import GameOver from './pages/GameOver';

function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/game">
					<Game />
				</Route>
				<Route path="/highScores">
					<HighScores />
				</Route>
				<Route path="/gameOver">
					<GameOver />
				</Route>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import GameOver from './pages/GameOver';

import { Container } from './styled/Container';
import { Main } from './styled/Main';
import GlobalStyle from './styled/Global';

import { useAuth0 } from './auth';

function App() {
	const { loading } = useAuth0();

	return (
		<Router>
			<GlobalStyle />
			<Main>
				{loading && <p>Loading...</p>}
				{!loading && (
					<Container>
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
					</Container>
				)}
			</Main>
		</Router>
	);
}

export default App;

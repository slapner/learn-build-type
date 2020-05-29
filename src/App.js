import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import GameOver from './pages/GameOver';

import { Container } from './styled/Container';
import { Main } from './styled/Main';
import GlobalStyle from './styled/Global';
import { lightTheme, darkTheme } from './styled/Themes';

import { useAuth0 } from './auth';
import useTheme from './hooks/UseTheme';

function App() {
	const { loading } = useAuth0();
	const { theme, toggleTheme } = useTheme();
	const currentTheme = theme === 'light' ? lightTheme : darkTheme;

	return (
		<Router>
			<ThemeProvider theme={currentTheme}>
				<GlobalStyle />
				<Main>
					{loading && <p>Loading...</p>}
					{!loading && (
						<Container>
							<Navbar toggleTheme={toggleTheme} />
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
			</ThemeProvider>
		</Router>
	);
}

export default App;

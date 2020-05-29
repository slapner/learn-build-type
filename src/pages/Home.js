import React, { useEffect } from 'react';
import CTA from '../styled/CTA';
import { Accent, StyledTitle } from '../styled/Random';
import { useHistory } from 'react-router-dom';

export default function Home() {
	const history = useHistory();

	useEffect(() => {
		const startGame = (e) => {
			if (e.key === 's') {
				history.push('/countdown');
			}
		};
		document.addEventListener('keyup', startGame);
		return () => document.removeEventListener('keyup', startGame);
	}, [history]);

	return (
		<div>
			<StyledTitle>Ready to type?!</StyledTitle>
			<CTA to="/countdown">
				Click or type <Accent>'s'</Accent> to start playing!
			</CTA>
		</div>
	);
}

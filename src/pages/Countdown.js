import React, { useState, useEffect } from 'react';
import { StyledCharacter } from '../styled/Game';
import { useHistory } from 'react-router-dom';
import { StyledTitle } from '../styled/Random';

export default function Countdown() {
	const [time, setTime] = useState(5);
	const history = useHistory();

	useEffect(() => {
		const countdown = setInterval(() => {
			setTime((current) => current - 1);
		}, 1000);
		return () => clearInterval(countdown);
	}, [setTime]);

	useEffect(() => {
		if (time === 0) {
			history.push('/game');
		}
	}, [time, history]);

	return (
		<div>
			<StyledTitle>Starting in...</StyledTitle>
			<StyledCharacter>{time}</StyledCharacter>
		</div>
	);
}

import { useEffect, useState } from 'react';

export default () => {
	const initialTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(initialTheme ? initialTheme : 'dark');

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		console.log('toggle Theme');
		setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	};

	return { theme, toggleTheme };
};

import { useEffect, useState } from 'react';

export default () => {
	const initialTheme = localStorage.getItem('theme');
	const [theme, setTheme] = useState(initialTheme || 'dark');

	useEffect(() => {
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
	};

	return { theme, toggleTheme };
};

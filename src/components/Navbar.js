import React from 'react';
import { Link } from 'react-router-dom';
import {
	StyledNavbar,
	StyledNavBrand,
	StyledNavItems,
	StyledLink,
	StyledButtonLink,
} from '../styled/Navbar';

import { Accent } from '../styled/Random';
import { useAuth0 } from '../auth';
import { StyledButton } from '../styled/Buttons';

export default function Navbar({ toggleTheme }) {
	const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

	return (
		<StyledNavbar>
			<StyledNavBrand>
				<Link to="/">
					Type<Accent>.Oh</Accent>
				</Link>
			</StyledNavBrand>
			<StyledNavItems>
				<li>
					<StyledLink to="/">Home</StyledLink>
				</li>
				<li>
					<StyledLink to="/highScores">High Scores</StyledLink>
				</li>
				{!isAuthenticated && (
					<li>
						<StyledButtonLink onClick={loginWithRedirect}>
							Login
						</StyledButtonLink>
					</li>
				)}
				{isAuthenticated && (
					<li>
						<StyledButtonLink onClick={logout}>Logout</StyledButtonLink>
					</li>
				)}
				<li>
					<StyledButton onClick={toggleTheme}>Toggle Theme</StyledButton>
				</li>
			</StyledNavItems>
		</StyledNavbar>
	);
}

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="header-div">
			<nav className="header-nav">
				<Link to="/" className="header-home">
					🏠
				</Link>
			</nav>
		</div>
	);
}

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Home() {
	return (
		<div className="home-bar">
			<div className="home-title">Logistics Management</div>
			<button className="home-button">
				<Link to="/login" className="home-link">
					login
				</Link>{' '}
			</button>
			<button className="home-button">
				<Link to="/signup" className="home-link">
					signup
				</Link>{' '}
			</button>
			<br />
		</div>
	);
}

export default Home;

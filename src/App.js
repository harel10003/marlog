import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Meneger from './pages/Meneger';
import Storage from './pages/Storage';
import Header from './component/Header';
import MarlogContext from './contex/MarlogContext';
import './App.css';

import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	const [employees, satEmployees] = useState([]);
	const [products, setProducts] = useState([
		{ id: 11122, name: 'green box', malgeza: false, mikum: false },
		{ id: 22554, name: 'green box', malgeza: false, mikum: false },
		{ id: 66698, name: 'blue box', malgeza: true, mikum: false },
		{ id: 78544, name: 'red box', malgeza: false, mikum: false },
		{ id: 69875, name: 'red box', malgeza: false, mikum: false },
	]);
	const addEmployees = (id, fullName, malgeza) => {
		// debugger;
		let temp = { id, fullName, malgeza, countIn: 0, countProduct: 0 };
		if (employees.length === 0) {
			satEmployees([{ ...temp }]);
		} else satEmployees([...employees, { ...temp }]);
	};
	const counter = (id) => {
		let workers = employees;
		workers.forEach((worker) => {
			if (worker.id === id) {
				worker.countIn++;
			}
		});
		satEmployees([...workers]);
	};
	return (
		<div>
			<MarlogContext.Provider
				value={{
					counter,
					satEmployees,
					products,
					setProducts,
					addEmployees,
					employees,
				}}
			>
				<Router>
					<Header />
					<div className="App">
						<Switch>
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/login">
								<Login />
							</Route>
							<Route path="/signup">
								<SignUp />
							</Route>
							<Route path="/storage/:id">
								<Storage />
							</Route>
							<Route path="/meneger">
								<Meneger />
							</Route>
						</Switch>
					</div>
				</Router>
			</MarlogContext.Provider>
		</div>
	);
}

export default App;

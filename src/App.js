import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Meneger from './pages/Meneger';
import Storage from './pages/Storage';
import Header from './component/Header';
import MarlogContext from './contex/MarlogContext';
import './App.css';

import React, { useState } from 'react';
import {
	HashRouter as Router,
	Routes,
	Route,
	Link,
	// useNavigate,
} from 'react-router-dom';
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
						<Routes>
							<Route path="/" element={<Home />} />

							<Route path="/login" element={<Login />} />

							<Route path="/signup" element={<SignUp />} />

							<Route path="/storage/:id" element={<Storage />} />

							<Route path="/meneger" element={<Meneger />} />
						</Routes>
					</div>
				</Router>
			</MarlogContext.Provider>
		</div>
	);
}

export default App;

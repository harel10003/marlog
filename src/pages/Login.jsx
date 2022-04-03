import React, { useContext, useState } from 'react';
import { useNavigate, withRouter } from 'react-router-dom';
import MarlogContext from '../contex/MarlogContext';
import '../App.css';

function Login(props) {
	const [id, setId] = useState('');
	const [msg, setMsg] = useState('');
	const { history } = props;
	const { employees, counter } = useContext(MarlogContext);
	const nav = useNavigate();

	let idInput = (e) => {
		setId(e.target.value);
	};

	const loginId = (idInput) => {
		if (idInput === '99999') history.push(`/meneger`);
		let idIn = (employee) => employee.id === id; //for some function , is help him
		if (employees.some(idIn) === false) {
			if (idInput.length !== 0)
				return setMsg('the number is not in the system .');
		} else {
			counter(id);
			nav(`/storage/${id}`);
		}
	};

	return (
		<div className="login-container">
			<label className="login-title">LOGIN</label>
			<div className="login-input">
				<label>NO.</label>

				<input
					type="number"
					value={id}
					onChange={idInput}
					name="id"
					required
				/>
			</div>
			<button className="login-button" onClick={() => loginId(id)}>
				Enter
			</button>
			<p>{msg}</p>
		</div>
	);
}

export default Login;

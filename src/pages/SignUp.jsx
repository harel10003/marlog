import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import MarlogContext from '../contex/MarlogContext';
import '../App.css';
function SignUp(props) {
	const { history } = props;
	const { addEmployees, employees } = useContext(MarlogContext);
	const [idEmployee, setIdEmployee] = useState('');
	const [fullName, SetFullName] = useState('');
	const [malgeza, SetMalgeza] = useState('');
	let errorId = false;
	let errorFN = false;
	const handleSubmit = (e) => {
		e.preventDefault();
		if (
			idEmployee.toString().length === 5 &&
			errorId === true &&
			errorFN === true
		) {
			addEmployees(idEmployee, fullName, malgeza);
			history.push('/');
		} else return <p>check again the form</p>;
	};

	const handleChangeId = (e) => {
		setIdEmployee(e.target.value);
	};
	const handleChangeFullName = (e) => {
		SetFullName(e.target.value);
	};
	const handleChangeMalgeza = (e) => {
		SetMalgeza(e.target.value);
	};
	const inputSubmit = () => {
		if (
			errorId !== true ||
			errorFN !== true ||
			malgeza === '' ||
			idEmployee.toString().length === 0 ||
			fullName.length === 0
		) {
			return true;
		} else {
			return false;
		}
	};

	const validId = () => {
		if (
			idEmployee.toString().length !== 5 &&
			idEmployee.toString().length > 0
		) {
			errorId = false;
			return <p>the number must be with 5 digits.</p>;
		} else {
			let idIn = (id) => id.id === idEmployee;
			if (employees.some(idIn) === true)
				return <p>the number is in the system .</p>;
			else errorId = true;
		}
	};

	const validfullName = () => {
		let count = 0;
		for (let i = 0; i < fullName.length; i++) {
			if (
				fullName[i].toLowerCase < 'a' ||
				fullName[i].toLowerCase > 'z'
			) {
				errorFN = false;
				return <p>the characters not valid. </p>;
			} else {
				errorFN = true;
			}
			if (fullName[i] === ' ') count++;
		}
		if ((count === 0 || fullName.length < 5) && fullName.length > 0) {
			errorFN = false;
			return (
				<p>the name must contain minimum 4 characters in two word. </p>
			);
		} else errorFN = true;
	};

	return (
		<div className="signUp-container">
			{/* <pre>{JSON.stringify(formValues)}</pre> */}
			<h2>Sign Up</h2>
			<form
				onSubmit={handleSubmit}
				action="/home"
				className="signup-form"
			>
				<div className="signup-input">
					<p className="signup-label">NO. </p>
					<input
						type="number"
						name="idEmployee"
						value={idEmployee}
						onChange={handleChangeId}
						required
					/>
					<p>{validId()}</p>
				</div>
				<div className="signup-input">
					<label className="signup-label">fullName </label>
					<input
						type="text"
						name="fullName"
						value={fullName}
						onChange={handleChangeFullName}
						required
					/>
					{validfullName()}
				</div>
				<div className="signup-input">
					<div>malgeza</div>

					<label>yes</label>
					<input
						type="radio"
						name="malgeza"
						value="true"
						onChange={handleChangeMalgeza}
						required
					/>

					<label>no</label>
					<input
						type="radio"
						name="malgeza"
						value="false"
						onChange={handleChangeMalgeza}
						required
						checked="checked"
					/>
				</div>
				<div>
					<input
						type="submit"
						value="create"
						style={{
							cursor:
								inputSubmit() === true
									? 'not-allowed'
									: 'pointer',
						}}
					/>
				</div>
			</form>
		</div>
	);
}

export default withRouter(SignUp);

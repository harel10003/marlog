import React, { useContext } from 'react';
import MarlogContext from '../contex/MarlogContext';
import '../App.css';
import Workerdetalis from '../component/Workerdetalis';
function Meneger() {
	const { employees } = useContext(MarlogContext);

	const renderEmployees = () =>
		employees.map(({ id, fullName, countIn, countProduct }, index) => (
			<Workerdetalis
				key={`${id}_${index}`}
				id={id}
				name={fullName}
				index={index}
				count={countIn}
				countProduct={countProduct}
			/>
		));

	return (
		<div className="meneger-div">
			<h3>טבלת כניסות וליקוטים</h3>
			<table>
				<thead>
					<tr>
						<th>No</th>
						<th>Fullname</th>
						<th>Counter</th>
						<th>Number of product</th>
					</tr>
				</thead>
				<tbody>{renderEmployees()}</tbody>
			</table>
		</div>
	);
}

export default Meneger;

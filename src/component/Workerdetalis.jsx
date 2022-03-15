import React from 'react';

function Workerdetalis({ name, id, count, countProduct }) {
	return (
		<tr>
			<td>{id}</td>
			<td>{name}</td>
			<td>{count}</td>
			<td>{countProduct}</td>
		</tr>
	);
}

export default Workerdetalis;

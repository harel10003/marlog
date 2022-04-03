import React, { useContext, useState } from 'react';
import MarlogContext from '../contex/MarlogContext';
import '../App.css';

function Product({
	id,
	name,
	malgeza,
	index,
	filterProducts,
	crtMalgeza,
	woekerIndex,
}) {
	const [msg, setMsg] = useState('');

	const { setProducts, employees, satEmployees } = useContext(MarlogContext);
	let temp = filterProducts;
	console.log(woekerIndex);
	const changeMikum = (index) => {
		if (
			(temp[index].malgeza === true && crtMalgeza == 'true') ||
			temp[index].malgeza === false
		) {
			temp[index].mikum = true;
			setProducts([...temp]);

			let workers = employees;
			workers[woekerIndex].countProduct++;
			satEmployees([...workers]);
		} else return setMsg('You do not have a malgeza license');
	};

	return (
		<div className="product-border">
			<div className="product-name">NO.{id} </div>
			<div className="product-id">
				Name: {name}
				<div className="product-id">
					Need forklift truck: {malgeza ? 'yes' : 'no'}
				</div>
			</div>

			<div>
				<button onClick={() => changeMikum(index)}>Update</button>
			</div>
			<p>{msg}</p>
		</div>
	);
}

export default Product;

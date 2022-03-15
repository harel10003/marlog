import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../component/Product';
import MarlogContext from '../contex/MarlogContext';
import '../App.css';
import { Link } from 'react-router-dom';

function Storage() {
	const { products, employees } = useContext(MarlogContext);

	const { id } = useParams();
	let isId = (worker) => Number(worker.id) == id;
	const param = employees.findIndex(isId);
	const filterProducts = products.filter((p) => p.mikum === false);
	let crtMalgeza = employees[param].malgeza;
	let fName = '';
	const name = () => {
		for (let i = 0; i < employees[param].fullName.length; i++) {
			if (employees[param].fullName[i] !== ' ')
				fName += employees[param].fullName[i];
			else break;
		}
		return fName;
	};

	const renderProducts = () =>
		filterProducts.map(({ id, name, malgeza }, index) => (
			// products.map(({ id, name, malgeza }, index) => (
			<Product
				key={`${id}_${index}`}
				name={name}
				id={id}
				index={index}
				malgeza={malgeza}
				filterProducts={filterProducts}
				crtMalgeza={crtMalgeza}
				woekerIndex={param}
			/>
		));
	return (
		<div>
			<p>Welcome {name()}</p>
			Detils:
			<br />
			<p>Full Name: {employees[param].fullName}</p>
			<p>No.: {employees[param].id}</p>
			<p>
				Forklift truck license:{' '}
				{employees[param].fullName ? 'yes' : 'no'}
			</p>
			<p>{filterProducts.length > 0 ? '' : 'no more products'}</p>
			<div className="storage-products">{renderProducts()}</div>
			<button className="storage-logout">
				<Link to="/home" className="storage-link">
					log Out
				</Link>
			</button>
		</div>
	);
}

export default Storage;

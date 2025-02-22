import React from 'react';
import { useContext } from 'react';
import ProductContext from '../contexts/ProductContext';
// Components
import Product from './Product';

const Products = () => {
	const {addItem, products} = useContext(ProductContext)
	return (
		<div className="products-container">
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
		</div>
	);
};

export default Products;

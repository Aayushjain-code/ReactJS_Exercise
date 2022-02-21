import React, { useState } from 'react'
import './styles.css';





const Function = () => {

	return (
		<>
			<h1>Items:</h1>
			{/* List of Items */}
			<h1>Cart:</h1>
			{/* Cart Items */}
			{/* Cart Total */}

		</>
	)
}

export default function Exercise() {
	return (
		<>
			<h1>Ex7: Add to Cart</h1>
			<p className='question'>
				Show a list of items with add to cart button<br />
				Clicking on the button should add that item to cart.<br />
				Show the cart below with items added.<br />
				Clicking on the same item twice should add more items in cart.<br />
				CHALLENGE : increase the count of the item in cart without adding it to list.<br />


			</p>
			<br />
			<br />
			<Function />
		</>
	)
};

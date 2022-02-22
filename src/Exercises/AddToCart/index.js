import React, { useState } from 'react'
import './styles.css';


const items = [
	{ id: 1, name: 'Onion', count: 1 },
	{ id: 2, name: 'Tomato', count: 1 },
	{ id: 3, name: 'Potato', count: 1 },
	{ id: 4, name: 'Carrots', count: 1 },
];

const Function = () => {
	const [cartItems, setCartItems] = useState([]);

	const filterItems = (items, itemId) => items.filter((item) => item.id === itemId);
	const addToCart = (itemId) => {
		let updatedCart;
		if (filterItems(cartItems, itemId).length > 0) {
			updatedCart = cartItems.map((item) => {
				if (item.id === itemId) {
					return {
						...item, count: item.count + 1
					};
				}
				return item;
			})
		} else {
			let item = filterItems(items, itemId)[0];
			updatedCart = [...cartItems, item];
		}
		setCartItems(updatedCart);
	}

	const removeFromCart = (itemId) => {
		let updatedCart = cartItems.reduce((acc, item) => {
			if (item.id === itemId) {
				if (item.count > 1) {
					acc.push({ ...item, count: item.count - 1 });
				}
			}
			else {
				acc.push(item);
			}
			return acc;
		}, []);
		setCartItems(updatedCart);
	}


	return (
		<>
			<div className="app">
				<b>Items:</b>
				<ul className='listItems'>
					{items.map(item => <li className='eachItem' >
						{item.name}:
						<button onClick={() => addToCart(item.id)}>Add to Cart</button>
					</li>)}
				</ul>
				<b>Cart:</b>
				<ul>
					{cartItems.map(item => <li className='eachItem'  >
						{item.name}:
						<button onClick={() => removeFromCart(item.id)}> -</button>
						{item.count}
						<button onClick={() => addToCart(item.id)}>+</button>
					</li>
					)}
				</ul>

			</div>
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

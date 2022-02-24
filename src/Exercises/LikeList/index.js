import React, { useState } from 'react'
import './styles.css';


const items = [
	{
		id: 1,
		title: 'Apple',
		price: '20',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quam. At ea nulla soluta dolor!',
		likes: 0
	},
	{
		id: 2,
		title: 'Mango',
		price: '30',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quam. At ea nulla soluta dolor!',
		likes: 0
	},
	{
		id: 3,
		title: 'Banana',
		price: '10',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quam. At ea nulla soluta dolor!',
		likes: 0
	},
	{
		id: 4,
		title: 'Orange',
		price: '15',
		description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, quam. At ea nulla soluta dolor!',
		likes: 0
	},

]

const Likes = ({ item }) => {
	const [likes, setLikes] = useState(items);
	const likeHandler = (id) => {
		let newLikes = [...likes];
		newLikes.map(item => {
			if (item.id === id) {
				item.likes++;
			}
			return item;
		})
		setLikes(newLikes);
	}
	return (
		<li key={item.id} className="itemCard">
			<h2>{item.title}</h2>
			<p><i> {item.description}</i></p>
			<p>Price: {item.price}$</p>
			<button onClick={() => likeHandler(item.id)}>Like</button>{item.likes}
		</li >
	)
}


const Function = () => {
	const [likes, setLikes] = useState(items);
	return (
		<div >
			<ul className='itemsContainer'>
				{likes.map(item => (
					<Likes key={item.id} item={item} />
				))}
			</ul>
		</div>
	)
}





export default function Exercise() {
	return (
		<>
			<h1>Ex12: Like List</h1>
			<p className='question'>
				Show a list of items with add to cart button<br />
				Clicking on the button should add that item to cart.<br />


			</p>
			<br />
			<br />
			<Function />
		</>
	)
};

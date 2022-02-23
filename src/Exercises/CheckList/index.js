import React, { useState } from 'react'
import './styles.css';
import Toggle from './Toggle';


const darkTheme = {
	backgroundColor: "black",
	color: "white"
};
const lightTheme = {
	backgroundColor: "white",
	color: "black"
};



const Function = () => {
	const [isdark, setIsdark] = useState(false);
	return (
		<div style={isdark ? darkTheme : lightTheme} >
			<Toggle isdark={isdark} setIsdark={setIsdark} />
			<p>
				Lorem Ipsum is simply dummy text of the printing and typesetting
				industry. Lorem Ipsum has been the industry's standard dummy text ever

			</p>
		</div>
	)
}





export default function Exercise() {
	return (
		<>
			<h1>Ex11: Dark/Light mode</h1>
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

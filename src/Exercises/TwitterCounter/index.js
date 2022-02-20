import React, { useState } from 'react'
import './styles.css';





const Function = () => {
	const [count, setCount] = useState(0);
	const remainingChar = (e) => {
		setCount(40 - e.target.value.length);
	}
	return (
		<>
			<textarea
				cols="40"
				rows="5"
				placeholder='Tweet here...'
				onChange={remainingChar}
			></textarea>
			<br />
			<p>Count: <span>{count}</span></p>

		</>
	)
}



export default function Exercise() {
	return (
		<>
			<h1>Ex1:Twitter character counter</h1>
			<p className='question display-block center'>Ex1: character counter
				See the Twitter post component. It gives you an indicator of the character count. Replicate that behavior.</p>
			<br />
			<br />
			<Function />
		</>
	)
};

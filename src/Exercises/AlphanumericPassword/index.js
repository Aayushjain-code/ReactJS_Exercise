import React, { useState } from 'react'
import './styles.css';





const Function = () => {
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState("");
	const passCheck = (pass) => {
		const checkNum = (char) => !isNaN(char);
		const checkAlpha = (char) => char.toLowerCase() !== char.toUpperCase();
		if ([...pass].some(checkNum) && [...pass].some(checkAlpha)) {
			setMessage("Password is valid");
		} else {
			setMessage("Password should have an alphabet and a letter!");
		}
	}
	return (
		<>
			<label >
				Enter password:
				<input

					placeholder='Enter password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</label>
			<button
				onClick={() => passCheck(password)}
			>Submit</button>
			<p>{message}</p>

		</>
	)
}

export default function Exercise() {
	return (
		<>
			<p className='question'>Ex3: Alphanumeric Password
				Password should contain a number. Show error if user misses character.

			</p>
			<h1>Ex3: Alphanumeric Password</h1>
			<Function />
		</>
	)
};

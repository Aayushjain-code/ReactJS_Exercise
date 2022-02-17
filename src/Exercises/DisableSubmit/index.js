import React, { useState } from 'react'
import './styles.css';





const Function = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const passwordChecker = () => {
		if (password === confirmPassword) {
			return <p>Password is correct</p>
		} else {
			return <p>Password is incorrect</p>
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
			<label >
				Re-enter password:
				<input
					placeholder='Re-enter password'
					value={confirmPassword}
					onChange={(e) => setConfirmPassword(e.target.value)}
				/>
			</label>
			<div>
				{passwordChecker()}
				<button
					disabled={password !== confirmPassword}
					onClick={() => { console.log(password) }}>Submit</button>
			</div>
		</>
	)
}

export default function Exercise() {
	return (
		<>
			<p className='question'>Ex4: Disable Submit
				Add a submit button to password change field.--
				Disable submit button if passwords don't match--
				Clicking on submit should console the password field

			</p>
			<h1>Ex4: Disable Submit</h1>
			<Function />
		</>
	)
};

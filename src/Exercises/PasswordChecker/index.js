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

				{password !== confirmPassword ? <p className='errorMessage'>Password Not Matched</p> : <button>Submit</button>}
			</div>
		</>
	)
}

export default function Exercise() {
	return (
		<>
			<h1>Ex2: password match</h1>
			<p className='question'>Ex2: password match
				Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.</p>
			<Function />
		</>
	)
};

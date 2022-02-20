import React, { useState } from 'react'
import './styles.css';





const Function = () => {
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	// const [error, setError] = useState('');
	// const passwordChecker = () => {
	// 	if (password === confirmPassword) {
	// 		console.log("Passwords match");
	// 		setError('Password Match');
	// 	} else {
	// 		console.log("Passwords do not match");
	// 		setError('Password Dont Match');
	// 	}
	// }
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
				{/* <div>
					<button onClick={passwordChecker} style={{ marginTop: '2rem' }}>Submit</button>
					<p>{error}</p>

				</div> */}
				{password !== confirmPassword ? <p className='errorMessage'>Password Not Matched</p> : <button>Submit</button>}
			</div>
		</>
	)
}

export default function Exercise() {
	return (
		<>
			<h1>Ex2: password match</h1>
			<p className='question  display-block center'>Ex2: password match
				Any signup form, password reset form has this functionality. Take two passwords from user. Show error only if both passwords don't match.</p>
			<Function />
		</>
	)
};

import React, { useState } from 'react'
import './styles.css';





const Function = () => {
	const [hidden, setHidden] = useState(true);
	return (
		<>
			<label >
				Enter password:
				<input
					type={hidden ? "password" : "text"}
					placeholder='Enter password'
				/>
				<button onClick={() => setHidden(!hidden)}>{hidden ? "Show password" : "Hide password"}</button>
			</label>


		</>
	)
}

export default function Exercise() {
	return (
		<>
			<h1>Ex5: Show Hide</h1>
			<p className='question'>
				Create a password reset form <br />
				Put a button show password near the input element.<br />
				Clicking should show password to the user.<br />
				Text on show password should change to hide password when password is shown.<br />
				Click on hide password and password goes back to hidden again.

			</p>
			<br />
			<br />
			<Function />
		</>
	)
};

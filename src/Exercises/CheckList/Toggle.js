import React from 'react'

const Toggle = ({ isdark, setIsdark }) => {
	return (
		<label>
			<input
				onChange={() => {
					setIsdark((isdark) => !isdark);
				}}
				type="checkbox"
			/>
			<span ></span>
		</label>
	);
}

export default Toggle

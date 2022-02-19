import React, { useState } from 'react'
import './styles.css';





const Function = () => {
	const [font, setFont] = useState(8);
	const [inputFontFamily, setInputFontFamily] = useState("Sans Serif");
	const setFontSize = (i) => {
		setFont(font + i);
	}
	return (
		<>
			<div className="controls">
				<button onClick={() => setFontSize(-8)}>
					-
				</button>
				<input
					className='input'
					value={font}
				/>
				<button onClick={() => setFontSize(8)}>
					+
				</button>
			</div>
			<div className="">
				<select name="" value={inputFontFamily} onChange={(e) => setInputFontFamily(e.target.value)}>
					<option value="Sans Serif">Sans Serif</option>
					<option value="Montserrat">Montserrat</option>
					<option value="Poppins">Poppins</option>
					<option value="Roboto">Roboto</option>
					<option value="Open Sans">Open Sans</option>
					<option value="Noto Sans">Noto Sans</option>
				</select>
			</div>
			<div className="text center" style={{ fontSize: font, fontFamily: inputFontFamily }}>
				<p>This font can be used !</p>
			</div>

		</>
	)
}

export default function Exercise() {
	return (
		<>
			<h1>Ex:6 Designer Tool</h1>
			<p className='question'>
				Let user finalise the size of text she would like on the screen. Two buttons + and - both will increase/decrease size by 8px. <br />
				Show the size on the screen.IDEA You can make a small app around this which quickly selects you between fonts.<br />

				Have prefixed sizes. Multiples of 8px.<br />
				Have some selected best fonts.<br />
				Tell which fonts are good for heading. which are good for text.<br />
				Suggest pair of fonts which go together.<br />
				Give user an option to copy the CSS. (Bonus feature)<br />


			</p>
			<br />
			<br />
			<Function />
		</>
	)
};

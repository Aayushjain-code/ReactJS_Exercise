import React from 'react'
import './styles.css';

const Toast = ({ hideToast, type, text }) => {
	return (
		<div className={`toastContainer ${type}`} >
			<h4>{type}</h4>
			<p>{text}</p>
			<button onClick={hideToast} >Hide</button>
		</div >
	)
}

export default Toast

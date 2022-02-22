import React, { useState } from 'react'
import Toast from './Toast';
import './styles.css';


const ToastData = [
	{
		type: 'Success',
		text: 'Hurray! Successfully completed'
	},
	{
		type: 'Error',
		text: 'Oops! An errror occured'
	},
	{
		type: 'Warning',
		text: 'This is a warning! Dont repeat it'
	},
	{
		type: 'Info',
		text: 'Info toast'
	}

]
const Function = () => {
	const [showToast, setShowToast] = useState(false);
	const [toastType, setToastType] = useState('');


	const hideToast = () => {
		setShowToast(false);
	};

	const viewToast = (type) => {
		setShowToast(true);
		setToastType(type);
	}
	const findMyToast = (type) => {
		return ToastData.find(toast => toast.type === type).text;
	}
	return (
		<>

			{
				ToastData.map((toast, index) => {
					return <button onClick={() => viewToast(toast.type)} key={index} className="toastButton">Show {toast.type} Toast!</button>
				})
			}


			<div className="displayArea">
				{
					showToast && <Toast hideToast={hideToast} type={toastType} text={findMyToast(toastType)} />
				}
			</div>

		</>
	)
}





export default function Exercise() {
	return (
		<>
			<h1>Ex9: Toast Example</h1>
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

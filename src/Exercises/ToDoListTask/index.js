import React, { useState } from 'react';
import './styles.css';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';



const Function = () => {
	const [toDoList, setToDoList] = useState([]);

	const handleToggle = (id) => {
		let mapped = toDoList.map((task) => {
			return task.id === Number(id)
				? { ...task, complete: !task.complete }
				: { ...task };
		});
		setToDoList(mapped);
	};

	const handleFilter = () => {
		let filtered = toDoList.filter((task) => {
			return !task.complete;
		});
		setToDoList(filtered);
	};

	const addTask = (userInput) => {
		let copy = [...toDoList];
		copy = [
			...copy,
			{ id: toDoList.length + 1, task: userInput, complete: false }
		];
		setToDoList(copy);
	};

	return (
		<div className="App">
			<ToDoForm addTask={addTask} />
			<ToDoList
				toDoList={toDoList}
				handleToggle={handleToggle}
				handleFilter={handleFilter}
			/>
		</div>
	);
}





export default function Exercise() {
	return (
		<>
			<h1>Ex10: ToDoList</h1>
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

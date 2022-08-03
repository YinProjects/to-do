import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTask } from '../store/todos';

const AddTodo = (props) => {
	const [task, setTask] = useState('');
	const [priority, setPriority] = useState('Low');

	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		// const task = evt.target.task.value;
		// const priority = evt.target.priority.value;
		const userId = user.id;
		dispatch(addTask({ task, priority, userId }));
		setTask('');
		setPriority('Low');
	};

	// const handleChange = (evt) => {
	// 	if (evt.target.name === 'task') setTask(evt.target.value);
	// 	if (evt.target.name === 'priority') setPriority;
	// };

	return (
		<div>
			<h3>Add Task</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="task">
						<small>Task</small>
					</label>
					<input
						onChange={(evt) => setTask(evt.target.value)}
						value={task}
						name="task"
						type="text"
					/>
				</div>
				<div>
					<label htmlFor="priority">
						<small>Priority</small>
					</label>
					<select
						onChange={(evt) => setPriority(evt.target.value)}
						id="priority"
						name="priority"
						value={priority}
					>
						<option value="Low">Low</option>
						<option value="Medium">Medium</option>
						<option value="High">High</option>
					</select>
				</div>
				<div>
					<button type="submit">Add Task</button>
				</div>
			</form>
		</div>
	);
};

export default AddTodo;

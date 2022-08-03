import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask } from '../store/todos';

const AddTodo = (props) => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const task = evt.target.task.value;
		const priority = evt.target.priority.value;
		const userId = user.id;
		dispatch(addTask({ task, priority, userId }));
	};

	return (
		<div>
			<h3>Add Task</h3>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="task">
						<small>Task</small>
					</label>
					<input name="task" type="text" />
				</div>
				<div>
					<label htmlFor="priority">
						<small>Priority</small>
					</label>
					<select id="priority" name="priority">
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

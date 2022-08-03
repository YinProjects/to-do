import axios from 'axios';

const GET_TODOS = 'GET_TODOS';
const ADD_TODO = 'ADD_TODO';

const _getTodos = (todos) => ({
	type: GET_TODOS,
	todos,
});

const _addTodo = (todo) => ({
	type: ADD_TODO,
	todo,
});

export const getTodos = (id) => {
	return async (dispatch) => {
		try {
			const { data: todos } = await axios.get(`/api/todos/${id}`);
			dispatch(_getTodos(todos));
		} catch (error) {
			console.error('Unable to get all todos', error);
		}
	};
};

export const addTask = ({ task, priority, userId }) => {
	return async (dispatch) => {
		try {
			const { data: newTodo } = await axios.post('/api/todos', {
				task,
				priority,
				userId,
			});
			dispatch(_addTodo(newTodo));
		} catch (error) {
			console.error('Unable to add todo', error);
		}
	};
};

export default function (state = [], action) {
	switch (action.type) {
		case GET_TODOS:
			return action.todos;
		case ADD_TODO:
			return [...state, action.todo];
		default:
			return state;
	}
}

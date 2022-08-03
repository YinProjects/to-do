import React from 'react';
import { connect } from 'react-redux';
//react hooks
import { useSelector, useDispatch } from 'react-redux';

//components
import AddTodo from './AddTodo'

export const Home = () => {
	const user = useSelector((state) => state.user);
	const todos = user.todos;

	return (
		<div>
			<div>
				<h3>Welcome, {user.name}</h3>
			</div>
			<div>
				<h4>To Dos</h4>
				<table>
					<thead>
						<tr>
							<th>Tasks</th>
							<th>Status</th>
							<th>Priority</th>
						</tr>
					</thead>
					<tbody>
						{todos.map((todo) => (
							<tr key={todo.id}>
								<td>{todo.task}</td>
								<td>{todo.status}</td>
								<td>{todo.priority}</td>
							</tr>
						))}
					</tbody>
				</table>
				<AddTodo />
			</div>
		</div>
	);
};

// const mapState = (state) => {
// 	return {
// 		username: state.auth.username,
// 	};
// };

// export default connect(mapState)(Home);
export default Home;

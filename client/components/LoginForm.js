import React from 'react';
import { getOneUser } from '../store/user';
import { useSelector, useDispatch } from 'react-redux';

const LoginForm = (props) => {
	const dispatch = useDispatch();

	const handleSubmit = (evt) => {
		evt.preventDefault();
		const username = evt.target.username.value;
		const password = evt.target.password.value;
		dispatch(getOneUser({ username, password }));
	};

	return (
		<div>
			<h1>Log In Here!</h1>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="username">
						<small>Username</small>
					</label>
					<input name="username" type="text" />
				</div>
				<div>
					<label htmlFor="password">
						<small>Password</small>
					</label>
					<input name="password" type="text" />
				</div>
				<div>
					<button type="submit">Log In</button>
				</div>
			</form>
		</div>
	);
};

export default LoginForm;

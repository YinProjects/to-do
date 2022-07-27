import React from 'react';

const LoginForm = (props) => {
	return (
		<div>
			<h1>Log In Here!</h1>
			<form>
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

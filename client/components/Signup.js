import React from 'react'
import {useDispatch} from 'react-redux'
import {addUser} from '../store/user'

const Signup = (props) => {

  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
		evt.preventDefault();
    const name = evt.target.name.value
		const username = evt.target.username.value;
		const password = evt.target.password.value;
		dispatch(addUser({name, username, password}));
	};

  return (
    <div>
			<h1>Signup Here!</h1>
			<form onSubmit={handleSubmit}>
      <div>
					<label htmlFor="name">
						<small>Name</small>
					</label>
					<input name="name" type="text" />
				</div>
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
					<button type="submit">Sign Up</button>
				</div>
			</form>
		</div>
  )
}

export default Signup

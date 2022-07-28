import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { user } from '../store';
//react hooks
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { logout } from '../store/user';

const Navbar = () => {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {}, [user]);

	function handleClick() {
		dispatch(logout());
	}

	return (
		<div>
			<h1>To Do List</h1>
			<nav>
				{user.username ? (
					<div>
						<Link to="/home">Home</Link>
						<a href="#" onClick={handleClick}>
							Logout
						</a>
					</div>
				) : (
					<div>
						<Link to="/login">Login</Link>
						<Link to="/signup">Sign Up</Link>
					</div>
				)}
			</nav>
			<hr />
		</div>
	);
};

export default Navbar;

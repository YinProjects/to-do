import axios from 'axios';
import history from '../history';

const USERNAME = 'username';

const GET_ONE_USER = 'GET_ONE_USER';
const ADD_USER = 'ADD_USER';

//action creator
const _getOneUser = (user) => ({
	type: GET_ONE_USER,
	user,
});

//thunk creator

export const tokenConfirm = () => {
	return async (dispatch) => {
		const token = window.localStorage.getItem(USERNAME);
		if (token) {
			const res = await axios.get(`/api/users/${token}`, {
				headers: {
					authorization: token,
				},
			});
			dispatch(_getOneUser(res.data));
		}
	};
};

export const getOneUser = ({ username, password }) => {
	return async (dispatch) => {
		try {
			const { data: user } = await axios.post(`/api/users/user`, {
				username,
				password,
			});
			window.localStorage.setItem(USERNAME, user.username);
			dispatch(tokenConfirm());
		} catch (error) {
			console.error('Unable to get user', error);
		}
	};
};

export const addUser = ({ name, username, password }) => {
	return async (dispatch) => {
		try {
			const { data: newUser } = await axios.post('/api/users/addUser', {
				name,
				username,
				password,
			});
			window.localStorage.setItem(USERNAME, newUser.username);
			dispatch(tokenConfirm());
		} catch (error) {
			console.error('Unable to add user', error);
		}
	};
};

export const logout = () => {
	window.localStorage.removeItem(USERNAME);
	history.push('/login');
	return { type: GET_ONE_USER, user: {} };
};

export default function (state = {}, action) {
	switch (action.type) {
		case GET_ONE_USER:
			return action.user;
		default:
			return state;
	}
}

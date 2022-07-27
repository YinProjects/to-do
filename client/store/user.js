import axios from "axios";

const GET_ONE_USER = "GET_ONE_USER";
const ADD_USER = "ADD_USER";

//action creator
const _getOneUser = (user) => ({
  type: GET_ONE_USER,
  user,
});

const _addUser = (newUser) => ({
  type: ADD_USER,
  newUser,
});

//thunk creator
export const getOneUser = ({ username, password }) => {
  return async (dispatch) => {
    try {
      const { data: user } = await axios.post(`/api/users/user`, {
        username,
        password,
      });
      dispatch(_getOneUser(user));
    } catch (error) {
      console.error("Unable to get user", error);
    }
  };
};

export const addUser = ({ name, username, password }) => {
  return async (dispatch) => {
    try {
      const { data: newUser } = await axios.post("/api/users/addUser", {
        name,
        username,
        password,
      });
      dispatch(_addUser(newUser));
    } catch (error) {
      console.error("Unable to add user", error);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ONE_USER:
      return action.user;
    case ADD_USER:
      return action.newUser;
    default:
      return state;
  }
}

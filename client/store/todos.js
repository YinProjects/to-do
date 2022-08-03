import axios from "axios";

const GET_TODOS = "GET_TODOS";

const _getTodos = (todos) => ({
  type: GET_TODOS,
  todos,
});

export const getTodos = (id) => {
  return async (dispatch) => {
    try {
      const { data: todos } = await axios.get(`/api/todos/${id}`);
      dispatch(_getTodos(todos));
    } catch (error) {
      console.error("Unable to get all todos", error);
    }
  };
};

export default function (state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      return action.todos;
    default:
      return state;
  }
}

import axios from 'axios'

const GET_ONE_USER = "GET_ONE_USER"

const _getOneUser = (user) => ({
  type: GET_ONE_USER,
  user
})

export const getOneUser = () => {
  return async (dispatch) => {
    try {
      const {data: user} = await axios.get('/api/users/:id')
      dispatch(_getOneUser(user))
    } catch (error) {
      console.error("Unable to get user", error)
    }
  }
}

export default function (state = {}, action) {
  switch (action.type) {
    case GET_ONE_USER:
      return action.user
    default:
      return state
  }
}

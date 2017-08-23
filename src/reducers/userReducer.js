import { actionTypes } from '../constants'

const initialState = {
    user: {
      id: null,
      name: null,
      age: null,
    },
    fetching: false,
    fetched: false,
    error: null,
}

export default function reducer(state = initialState, action) {

    switch (action.type) {
      case (actionTypes().FETCH_USER || actionTypes().FETCH_USER_PENDING): {
        return {...state, fetching: true}
      }
      case actionTypes().FETCH_USER_REJECTED: {
        return {...state, fetching: false, error: action.payload.message}
      }
      case actionTypes().FETCH_USER_FULFILLED: {
        return {
          ...state,
          fetching: false,
          fetched: true,
          user: action.payload.data.user,
        }
      }
    }

    return state
}
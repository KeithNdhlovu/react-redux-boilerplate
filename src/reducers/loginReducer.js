import { actionTypes } from '../constants'

const initialState = {
    token: null,
    fetching: false,
    fetched: false,
    error: null,
}

/**
 * @param state
 * @param action <Promise>
 */
export default function reducer(state = initialState, action) {

    switch (action.type) {
      case (actionTypes().FETCH_TOKEN_PENDING || actionTypes().FETCH_TOKEN): {
        return {...state, fetching: true}
      }
      case actionTypes().FETCH_TOKEN_REJECTED: {
        return {...state, fetching: false, error: action.payload.message}
      }
      case actionTypes().FETCH_TOKEN_FULFILLED: {

        return {
          ...state,
          fetching: false,
          fetched: true,
          token: action.payload.data.token,
        }
      }
      case actionTypes().SET_TOKEN: {
        return {
          ...state,
          token: {...state, token: action.payload},
        }
      }
    }

    return state
}
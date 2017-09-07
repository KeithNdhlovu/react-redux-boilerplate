import React from 'react'
import { createAction, handleActions } from 'redux-actions'

const initialState = {
  authenticating: false,
  user: {
    token: null,
    profile: null
  },
  error: null
}

/**
 * @param state
 * @param action <Promise>
 */
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case 'REACT_REDUX_OAUTH2/CONFIG': {
            return {...state, config: action.payload}
        };
        case 'REACT_REDUX_OAUTH2/START': {
            return {...state, authenticating: true}
        };
        case 'REACT_REDUX_OAUTH2/CANCEL': {
            return {...state, authenticating: false}
        };
        case 'REACT_REDUX_OAUTH2/ERROR': {
            return {...state, authenticating: false, error: action.payload}
        };
        case 'REACT_REDUX_OAUTH2/RESET': {
            return {...state, authenticating: false, error: null, user: {token: null, profile: null}}
        };
        case 'REACT_REDUX_OAUTH2/SAVE': {
            return {...state,authenticating: false, user: action.payload}
        }
        case 'REACT_REDUX_OAUTH2/REFRESH': {
            return {...state, refreshing: true, retry: action.payload}
        }
    }

    return state
}
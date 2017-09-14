import React from 'react'
import { actionTypes } from '../constants'
import { 
    map,
    get,     
    omit, 
    flatten, 
} from 'lodash'

import { 
    createAction, 
    handleActions 
} from 'redux-actions'

const initialState = {
  fetching: false,
  resources: [],
  error: null
}

/**
 * @param state
 * @param action <Promise>
 */
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes().RESOURCE_ACTION_START: {
            return {...state, fetching: true}
        };
        case actionTypes().RESOURCE_ACTION_ERROR: {
            return {...state, fetching: false, error: action.payload}
        };
        case actionTypes().RESOURCE_ACTION_SAVE: {

            return {...state,fetching: false, resources: action.payload.results}
        }
    }

    return state
}
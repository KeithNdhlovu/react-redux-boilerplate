import React from 'react'
import { actionTypes } from '../constants'
import { tagsHelper } from '../utils/tagsHelper'
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
  groups: [],
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
            
            let resources = flatten(map(action.payload.results, "items"));
            let groups = map(action.payload.results, (result, index) => {
                return omit(result, "items")
            })

            return {...state,fetching: false, resources: tagsHelper.createTags(resources), groups: groups}
        }
    }

    return state
}
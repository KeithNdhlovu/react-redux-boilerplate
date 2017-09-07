import React from 'react'
import { createAction, handleActions } from 'redux-actions'
import { actionTypes } from '../constants'
import { tagsHelper } from '../utils/tagsHelper'

const initialState = {
  fetching: false,
  events: [],
  error: null
}

/**
 * @param state
 * @param action <Promise>
 */
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes().EVENT_ACTION_START: {
            return {...state, fetching: true}
        }
        case actionTypes().EVENT_ACTION_ERROR: {
            return {...state, fetching: false, error: action.payload}
        }
        case actionTypes().EVENT_ACTION_SAVE: {
            return {...state,fetching: false, events: tagsHelper.createTags(action.payload.results)}
        }
        case actionTypes().EVENT_ACTION_ITEM_OPEN: {
            return {...state, item: action.payload}
        }
        case actionTypes().EVENT_ACTION_ITEM_CLOSED: {
            return {...state, item: action.payload}
        }
    }

    return state
}
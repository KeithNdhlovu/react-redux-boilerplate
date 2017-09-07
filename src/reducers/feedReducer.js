import React from 'react'
import { createAction, handleActions } from 'redux-actions'
import { actionTypes } from '../constants'
import { tagsHelper } from '../utils/tagsHelper'

const initialState = {
  fetching: false,
  feedList: [],
  error: null
}

/**
 * @param state
 * @param action <Promise>
 */
export default function reducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes().FEED_ACTION_START: {
            return {...state, fetching: true}
        };
        case actionTypes().FEED_ACTION_ERROR: {
            return {...state, fetching: false, error: action.payload}
        };
        case actionTypes().FEED_ACTION_SAVE: {
            return {...state,fetching: false, feedList: tagsHelper.createTags(action.payload.results)}
        }
    }

    return state
}
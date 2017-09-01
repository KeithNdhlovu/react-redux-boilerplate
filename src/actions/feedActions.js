import { createAction, handleActions } from 'redux-actions'

import { actionTypes } from '../constants'
import { getFeedItems } from '../api';

export const actions = {

    /**
     * Initialize options
     */
    error: createAction(actionTypes().FEED_ACTION_ERROR),
    start: createAction(actionTypes().FEED_ACTION_START),
    save: createAction(actionTypes().FEED_ACTION_SAVE),

    /**
     * Get Feed handler
     * 
     */
    fetchFeedItems () {
        return (dispatch, getState) => getFeedItems().then( (response) => {
            dispatch(actions.save(response.data));
        }).catch( (error) => {
            dispatch(actions.error(error));
        })
    }
} 
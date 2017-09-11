import { createAction, handleActions } from 'redux-actions'

import { actionTypes } from '../constants'
import { getChannels } from '../api';

export const actions = {

    /**
     * Initialize options
     */
    error: createAction(actionTypes().CHANNEL_ACTION_ERROR),
    start: createAction(actionTypes().CHANNEL_ACTION_START),
    save: createAction(actionTypes().CHANNEL_ACTION_SAVE),

    /**
     * Get Event handler
     * 
     */
    fetchChannels () {
        return (dispatch, getState) => getChannels().then( (response) => {
            dispatch(actions.save(response.data));
        }).catch( (error) => {
            dispatch(actions.error(error));
        })
    }
} 
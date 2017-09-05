import { createAction, handleActions } from 'redux-actions'

import { actionTypes } from '../constants'
import { getResources } from '../api';

export const actions = {

    /**
     * Initialize options
     */
    error: createAction(actionTypes().EVENT_ACTION_ERROR),
    start: createAction(actionTypes().EVENT_ACTION_START),
    save: createAction(actionTypes().EVENT_ACTION_SAVE),

    /**
     * Get Event handler
     * 
     */
    fetchResources (organisationID) {
        return (dispatch, getState) => getResources(organisationID).then( (response) => {
            dispatch(actions.save(response.data));
        }).catch( (error) => {
            dispatch(actions.error(error));
        })
    }
} 
import { createAction, handleActions } from 'redux-actions'

import { actionTypes } from '../constants'
import { getContacts } from '../api';

export const actions = {

    /**
     * Initialize options
     */
    error: createAction(actionTypes().CONTACT_ACTION_ERROR),
    start: createAction(actionTypes().CONTACT_ACTION_START),
    save: createAction(actionTypes().CONTACT_ACTION_SAVE),

    /**
     * Get Event handler
     * 
     */
    fetchContacts () {
        return (dispatch, getState) => getContacts().then( (response) => {
            dispatch(actions.save(response.data));
        }).catch( (error) => {
            dispatch(actions.error(error));
        })
    }
} 
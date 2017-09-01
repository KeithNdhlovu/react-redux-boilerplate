import { createAction, handleActions } from 'redux-actions'

import { actionTypes } from '../constants'
import { getOrganisations } from '../api';

export const actions = {

    /**
     * Initialize options
     */
    error: createAction(actionTypes().ORGANISATION_ACTION_ERROR),
    start: createAction(actionTypes().ORGANISATION_ACTION_START),
    save: createAction(actionTypes().ORGANISATION_ACTION_SAVE),

    /**
     * Get Organisations handler
     * 
     */
    fetchOrganisations () {
        return (dispatch, getState) => getOrganisations().then( (response) => {
            dispatch(actions.save(response.data));
        }).catch( (error) => {
            dispatch(actions.error(error));
        })
    }
} 
import { actionTypes } from '../constants'
import { fetchToken } from '../api';

/**
 * Execute the request to get the access token
 * 
 * @param email
 * @param password
 */
export function getToken(email, password) {
    
    return (dispatch) => fetchToken(email, password).then((response)=> {
        dispatch({
            type: actionTypes().FETCH_TOKEN_FULFILLED, 
            payload: response
        });
    }).catch((err) => {
        dispatch({
            type: actionTypes().FETCH_TOKEN_REJECTED, 
            payload: err
        });
    });
}
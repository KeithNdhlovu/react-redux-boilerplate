import { actionTypes } from '../constants'
import { fetchtMe } from '../api';

export function getMe() {
    return (dispatch) => {
        dispatch({
            type: actionTypes().FETCH_USER, 
            payload: fetchtMe()
        });
    }
}
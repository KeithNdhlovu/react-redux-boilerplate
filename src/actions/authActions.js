import { createAction, handleActions } from 'redux-actions'
import querystring from 'query-string'
import axios from 'axios';
import Uri from 'jsuri';

import { actionTypes } from '../constants'
import { doLogin, getMe, getRefreshToken } from '../api';

import history from '../history'

export const actions = {

    /**
     * Initialize options
     */
    config: createAction('REACT_REDUX_OAUTH2/CONFIG'),
    error: createAction('REACT_REDUX_OAUTH2/ERROR'),
    start: createAction('REACT_REDUX_OAUTH2/START'),
    reset: createAction('REACT_REDUX_OAUTH2/RESET'),
    cancel: createAction('REACT_REDUX_OAUTH2/CANCEL'),
    refresh: createAction('REACT_REDUX_OAUTH2/REFRESH'),
    save: createAction('REACT_REDUX_OAUTH2/SAVE'),

    /**
     * Signin handler
     * @param credentials
     */
    signin (credentials) {
        return (dispatch, getState) => doLogin(credentials.username, credentials.password).then( (response) => {
            
            actions.saveTokens(response.data);
            dispatch(actions.sync(response.data));
        }).catch( (error) => {
            dispatch(actions.error(error));
        })
    },

    /**
     * Process login success
     * @param user
     */
    sync (token) {
        const { access_token } = token;
        return (dispatch, getState) => getMe(access_token).then( (response) => {
            
            const user = { token, profile: response.data.me }
            this.saveUser(user.profile)

            dispatch(actions.save(user))
        }).catch( (error) => {
            dispatch(actions.error(error))
        })
    },

    /**
     * Try to connect user from local storage
     */
    onLocalLogin () {
        let accessToken = localStorage.getItem('access_token');
        let refreshToken = localStorage.getItem('refresh_token');
        let user = JSON.parse(localStorage.getItem('user'));

        if (accessToken && refreshToken && user) {
            actions.saveTokens({access_token: accessToken, refresh_token: refreshToken});
            actions.saveUser(user);
        }
    },

    /**
     * Logout user and clear their localStorage
     */
    clearLogins (error = null) {

        localStorage.clear();
        history.replace("/login", null);
    },

    /**
     * Save tokens in local storage and automatically add token within request
     * @param params
     */
    saveTokens (params) {

        const { access_token, refresh_token } = params;

        localStorage.setItem('access_token', access_token);
        localStorage.setItem('refresh_token', refresh_token);
    },

    /**
     * Save user to localstore
     */
    saveUser (user) {
        localStorage.setItem('user', JSON.stringify(user));
    }
} 
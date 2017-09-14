import axios from 'axios';
import { actions } from '../actions/authActions'
import { createAction, handleActions } from 'redux-actions'
import { push, replace, LOCATION_CHANGE } from 'react-router-redux'
import Uri from './endpoints'

let Config = {
	apiUrl: process.env.REACT_APP_LOCAL_API_BASE_URL,
	clientId: process.env.REACT_APP_CLIENT_ID,
	clientSecret: process.env.REACT_APP_CLIENT_SECRET,
}

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    var token;
    token = localStorage.getItem('access_token');

    if ( token !== null && token !== 'undefined') {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
}, function (error) {

    // Do something with request error
    return new Promise((resolve, reject) => {
		if (error.response.status === 401 && error.response.data.error_description === 'The access token provided has expired.') {
			getRefreshToken({initialRequest: error.response.config, resolve: resolve, reject: reject});
		} else if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
			getRefreshToken({initialRequest: error.response.config, resolve: resolve, reject: reject});
		} else {
			reject(error);
		}
	});
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
	
	if (response.headers && response.headers.Authorization) {
		localStorage.setItem('access_token', response.headers.Authorization)
	}

	return response;
}, function (error) {

	// Do something with response error
    return new Promise((resolve, reject) => {
		if (error.response.status === 401 && error.response.data.error_description === 'The access token provided has expired.') {
			getRefreshToken({initialRequest: error.response.config, resolve: resolve, reject: reject});
		} else if (error.response.status === 401 && error.response.statusText === 'Unauthorized') {
			getRefreshToken({initialRequest: error.response.config, resolve: resolve, reject: reject});
		} else {
			reject(error);
		}
	});
});

/**
* @param email (String) The cell phone number of the user which acts as the email.
* @param password (String) The user's password.
* @return Promise
*/
export function doLogin (email, password) {
	
	let { DO_LOGIN } = Uri;

	let payload = {
		email: email,
		password: password,
		app_version: 1,
		device_id: "THEWEBNOID",
		device_type: "Desktop"
	};

	return axios.post(getEndpoint(DO_LOGIN), Object.assign({
		client_id: Config.clientId,
		client_secret: Config.clientSecret,
		grant_type: 'password'
	}, payload));
}

/**
 * Get the refresh token
 */
export function getRefreshToken (params) {
	
	let refreshToken = localStorage.getItem('refresh_token');
	let { DO_LOGIN_REFRESH } = Uri;

	let payload = {
		refresh_token: refreshToken
	};

	if (refreshToken) {
		return axios.post(getEndpoint(DO_LOGIN_REFRESH), payload).then( (response) => {
            
			actions.saveTokens(response.data);

			// Replay request
            axios(params.initialRequest).then(response => {
                params.resolve(response);
            }).catch(response => {
                params.reject(response);
            });			
		})
	}
}

/**
 * Get the logged in users' details
 * 
 * @return Promise
 */
export function getMe (accessToken) {
	
	let { GET_ME } = Uri;

	let payload = { 
		"id": "randomDigit", 
		"name": "firstName",
		"last_name": "lastName",
		"created_at": "iso8601", 
		"updated_at": "iso8601", 
		"disabled_at": "iso8601",
		"schools": { 
			"name": "cityPrefix", 
			"id": "randomDigit" 
		} 
	}

	return axios.post(getEndpoint(GET_ME), payload)
}


/**
 * Get the logged in users' resources
 * @param organisationID
 * @return Promise
 */
export function getResources (organisationID = null) {
	
	let { GET_RESOURCES } = Uri;
	let payload = { 
		"body": "realText", 
		"id": "randomDigit", 
		"school_id": "randomDigit", 
		"title": "catchPhrase", 
		"created_at": "iso8601", 
		"updated_at": "iso8601", 
		"disabled_at": "iso8601", 
		"rsvp_date": "iso8601", 
		"icon_id": "randomDigit", 
		"is_read": "boolean"
	}

	return axios.post(getEndpoint(GET_RESOURCES), payload)
}

/**
 * Return API endpoint with given path
 * @param path
 * @param id
 * @returns {string}
 */
function getEndpoint ( path , id = null ) {
	
	if (id) {
		return Config.apiUrl + path.replace("%s", id)
	}
	
	return Config.apiUrl + path
}
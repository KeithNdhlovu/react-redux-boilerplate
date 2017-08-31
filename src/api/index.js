import axios from 'axios';
import InterceptorUtil from '../utils/InterceptorUtil';
import { actions } from '../actions/authActions'
import { createAction, handleActions } from 'redux-actions'



let Config = {
	apiUrl: process.env.REACT_APP_PROD_API_BASE_URL,
	clientId: process.env.REACT_APP_CLIENT_ID,
	clientSecret: process.env.REACT_APP_CLIENT_SECRET,
}

axios.interceptors.response.use(response => {
	return response;
}, error => {
	return new Promise((resolve, reject) => {
		if (error.status === 401 && error.data.error_description === 'The access token provided has expired.') {
			actions.refreshToken({initialRequest: error.config, resolve: resolve, reject: reject});
		} else if (error.status === 401 && error.statusText === 'Unauthorized') {
			actions.logout();
		} else {
			reject(error);
		}
	});
});

/**
 * Get token using credentials
 * 
 * @param email
 * @param password
 * @return Promise
 */
export function doLogin (username, password) {
	
	let path = '/login';

	let payload = {
		username: username,
		password: password,
		app_version: 1,
		device_id: "THEWEBNOID",
		device_type: "Desktop"
	};

	return axios.post(getEndpoint(path), Object.assign({
		client_id: Config.clientId,
		client_secret: Config.clientSecret,
		grant_type: 'password'
	}, payload));
}

/**
 * Get the refresh token
 */
export function getRefreshToken () {
	
	let refreshToken = localStorage.getItem('refresh_token');
	let path = '/login/refresh';
	let payload = {
		refresh_token: refreshToken
	};

	if (refreshToken) {
		axios.interceptors.request.eject(InterceptorUtil.getInterceptor());
		axios.post(getEndpoint(path), payload)
	}
}

/**
 * Get the logged in users' details
 * @param accessToken
 * @return Promise
 */
export function getMe (accessToken) {
	
	let path = '/me';

	let payload = {
		headers: { 'Authorization': `Bearer ${accessToken}` }
	}

	return axios.get(getEndpoint(path), payload)
}


/**
 * Return API endpoint with given path
 * @param grantType
 * @returns {string}
 */
function getEndpoint ( path ) {
	return Config.apiUrl + path;
}
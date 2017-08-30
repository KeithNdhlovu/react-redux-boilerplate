import axios from 'axios';

// Customise Our Axios Instance to overload some methods
let Axios = axios.create({
    baseURL: process.env.REACT_APP_PROD_API_BASE_URL,
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json',
		"Access-Control-Allow-Credentials": true,
	},
    responseType: 'json',
    withCredentials: true,
});

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    var token;

    token = localStorage.getItem('jwt-token');

    if ( token !== null && token !== 'undefined') {
        config.headers.Authorization = token;
    }

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
Axios.interceptors.response.use(function (response) {
	
	if (response.status && response.status === 401) {
		localStorage.removeItem('jwt-token');
	}
	if (response.headers && response.headers.Authorization) {
		localStorage.setItem('jwt-token', response.headers.Authorization)
	}
	if (response.data && response.data.token && response.data.token.length > 10) {
		localStorage.setItem('jwt-token', 'Bearer ' + response.data.token);
	}
	
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

/**
 * Get token using credentials
 * 
 * @param email
 * @param password
 * @return Promise
 */
export function fetchToken(username, password) {
    
    let path = 'login';

	let payload = {
		username: username,
		password: password,
		device_id: makeid(),
		app_version: 1,
		device_type: "Desktop"
	};

    return Axios.post(path, payload);
}

/**
 * Get the logged in users' details
 * 
 * @return Promise
 */
export function fetchtMe(username, password) {
    
    let path = 'users/me';

	let payload = {};

    return Axios.get(path);
}
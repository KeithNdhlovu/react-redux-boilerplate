import axios from 'axios';

// Customise Our Axios Instance to overload some methods
let Axios = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'X-Requested-With': 'rest.js',
        'Content-Type': 'application/json'
    }
});

// Add a request interceptor
Axios.interceptors.request.use(function (config) {
    var token;

    token = localStorage.getItem('jwt-token');

    if ( token !== null && token !== 'undefined') {
        config.headers.Authorization = token;
    }

    console.log("onRequest", config);

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
	
	console.log("onResponse", response);
	
	return response;
}, function (error) {
	// Do something with response error
	return Promise.reject(error);
});

/**
 * Get token using credentials
 * 
 * @param email
 * @param password
 * @return Promise
 */
export function fetchToken(email, password) {
    
    let path = 'login';

	let payload = {
		email: email,
		password: password
	};

    return Axios.post(path, payload);
}

/**
 * Get the logged in users' details
 * 
 * @return Promise
 */
export function fetchtMe(email, password) {
    
    let path = 'users/me';

	let payload = {};

    return Axios.get(path);
}
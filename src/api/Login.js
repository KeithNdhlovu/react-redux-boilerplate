/**
 * Get token using credentials
 * 
 * @param email
 * @param password
 * @param Axios
 * @return Promise
 */
export function getToken(email, password, Axios) {
    
    let path = 'login';

	let payload = {
		email: email,
		password: password
	};

    return Axios.post(path, payload);
}
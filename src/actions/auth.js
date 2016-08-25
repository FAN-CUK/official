import {
	AUTH_LOGIN,
	AUTH_LOGIN_SUCCESS,
	AUTH_LOGIN_FAILURE,
	AUTH_CHECK_TOKEN,
	AUTH_CHECK_TOKEN_SUCCESS,
	AUTH_CHECK_TOKEN_FAILURE
} from './actionTypes';

import axios from 'axios';


export function loginRequest(email) {
	return (dispatch) => {
		dispatch(login());

		return axios.post('/api/auth/login', { email, hashPassword })
			.then((res) => {
				//success
				dispatch(loginSuccess());
			}).catch((err) => {
				//failed
				dispatch(loginFailure());
			});
	}
}

export function login() {
	return {
		type : AUTH_LOGIN
	};
}

export function loginSuccess(res) {
	//console.log(res);
	return {
		type : AUTH_LOGIN_SUCCESS,
	};
}

export function loginFailure() {
	return {
		type : AUTH_LOGIN_FAILURE,
	};
}

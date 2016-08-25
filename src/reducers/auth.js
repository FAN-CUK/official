import * as types from 'actions/actionTypes';
import update from 'react-addons-update';

const initialState = {
	login : {
		status : 'INIT'
	},
	checkToken : {
		status : 'INIT'
	},
	status : {
		tokenValid : false,
		isLoggedIn : false,
		userEmail : '',
		userName : '',
	}
}

export default function auth(state, action) {
	if(typeof state == "undefined")
		state = initialState;

	//console.log("ACTION: ", action);
	switch(action.type) {
		case types.AUTH_LOGIN:
			return update(state, {
				login: {
					status: { $set : 'WAITING' }
				}
			});
		case types.AUTH_LOGIN_SUCCESS:
			return update(state, {
				login: {
					status : { $set : 'SUCCESS' }
				},
				status: {
					isLoggedIn : { $set : true },
					userEmail : { $set : action.res.email },
					userName : { $set : action.res.name },
				}
			});
		case types.AUTH_LOGIN_FAILURE:
			return update(state, {
				login : {
					status : { $set : 'FAILURE' }
				}
			});
		case types.AUTH_CHECK_TOKEN:
			return update(state, {
				checkToken : {
					status : { $set : 'WAITING' }
				},
				status : {
					isLoggedIn : { $set : true }
				}
			});
		case types.AUTH_CHECK_TOKEN_SUCCESS:
			return update(state, {
				checkToken : {
					status : { $set : 'SUCCESS' }
				},
				status : {
					tokenValid : { $set : true },
					userEmail : { $set : action.res.email },
					userName : { $set : action.res.name },
				}
			});
		case types.AUTH_GET_STATUS_FAILURE:
			return update(state, {
				checkToken : {
					status : { $set : 'FAILURE' }
				},
				status : {
					tokenValid : { $set : false },
					isLoggedIn : { $set : false },
				}
			});
		case types.AUTH_LOGOUT:
			return update(state, {
				login: {
					status : { $set : 'INIT' }
				},
				checkToken : {
					status : { $set : 'INIT' }
				},
				status: {
					tokenValid : { $set : false },
					isLoggedIn : { $set : false },
					userEmail : { $set : '' },
					userName : { $set : '' }
				}
			});
		default:
			return state;
	}
}


import React from 'react';
import { Auth } from 'components';

import { connect } from 'react-redux';
import { loginRequest } from 'actions/auth';

class Login extends React.Component {
  render() {
    return (
      <Auth isLogin={true}/>
    );
  }
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		status : state.auth.login.status
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		loginRequest : (email, hashPassword) => {
			return dispatch(loginRequest(email, hashPassword));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);


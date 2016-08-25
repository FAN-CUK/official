import React from 'react';
import { Auth } from 'components';

class Login extends React.Component {
  render() {
    return (
      <Auth isLogin={true}/>
    );
  }
}

export default Login;

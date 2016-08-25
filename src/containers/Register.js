import React from 'react';
import { Auth } from 'components';

class Register extends React.Component {
  render() {
    return (
      <Auth isLogin={false}/>
    );
  }
}

export default Register;

import React from 'react';
import { FormGroup, ControlLabel, FormControl, Button, Row, Col, Radio } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router'

import css from './Auth.css'

class Auth extends React.Component {
  render() {
    const loginForms = (
        <form className={css.authForm}>
          <FormGroup>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              id="email"
              type="email"
              placeholder="Input Your Email"
            />
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              id="password"
              type="password"
              placeholder="Input Your Password"
            />
          </FormGroup>
          <Button bsStyle="primary" bsSize="large" block>
            <FontAwesome name="sign-in"/> Login
          </Button>
          <div className={css.authTopPadding}>
            <Link to='/login#'>
              <p className="text-right">Forget Email/Password ?</p>
            </Link>
            <Link to='/register'>
              <p className="text-right">Request New Account</p>
            </Link>
          </div>
        </form>
    );
    const registerForms = (
      <form className={css.authForm}>
        <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            id="email"
            type="email"
            placeholder="Input Your Email"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Password</ControlLabel>
          <FormControl
            id="password"
            type="password"
            placeholder="Input Your Password"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Retype Passwrod</ControlLabel>
          <FormControl
            id="re-password"
            type="password"
            placeholder="Retype Your Password"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Real Name</ControlLabel>
          <FormControl
            id="name"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Major</ControlLabel>
          <FormControl componentClass="select" placeholder="select">
            <option value="csie">컴퓨터정보공학부</option>
            <option value="other">타 학부</option>
          </FormControl>
        </FormGroup>
        <FormGroup>
          <ControlLabel>Student Number</ControlLabel>
          <FormControl
            id="stdNumber"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>Phone</ControlLabel>
          <FormControl
            id="phone"
            type="text"
          />
        </FormGroup>
        <Button bsStyle="success" bsSize="large" block>
          <FontAwesome name="user-plus"/> Request Registry
        </Button>
      </form>
    )
    return(
      <div className="container-fluid">
        <Row>
          <Col sm={4} smOffset={4}>
            { this.props.isLogin ? loginForms : registerForms }
          </Col>
        </Row>
      </div>
    );
  }
};

Auth.propTypes = {
  isLogin : React.PropTypes.bool,
  onLogin : React.PropTypes.func.isRequired,
  onRegister : React.PropTypes.func.isRequired
}

Auth.defaultProps = {
  isLogin : true,
  onLogin : (email, passwd) => { console.log("login function not defined"); },
  onRegister : (args) => { console.log("Register function not defined") }
}
export default Auth;

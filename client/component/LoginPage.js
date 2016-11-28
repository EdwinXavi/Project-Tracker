import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    //this.handleUsernameChange = this.handleUsernameChange.bind(this);
    //this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  // handleUsernameChange(e) {
  //   this.setState({username: e.target.value});
  // }
  // handlePasswordChange(e) {
  //   this.setState({password: e.target.value});
  // }
  handleLogin(e) {
    e.preventDefault();
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    this.setState({username: username, password: password});
    if(username=='' && password=='') {
      alert('enter username and password')
    } else if(password=='') {
      alert('enter password');
    } else if(username=='') {
      alert('enter username');
    }
    else {
      this.props.signin(username,password);
      this.context.router.push('/home');
    }
    this.refs.loginForm.reset();
  }
  render()  {
    return (
      <div className='wrapper'>
        <form ref='loginForm' className='form-signin' action='' onSubmit={this.handleLogin}>
          <h2 className='form-signin-heading'>Please Login</h2>
          <input ref='username' type='text' className='form-control' name='username' placeholder='username' required='' autoFocus='' />
          <input ref='password' type='password' className='form-control' name='password' placeholder='password' required=''/>
          <button className='btn btn-lg btn-primary btn-block login-button' type='submit' onClick={this.handleLogin}>Login</button>
        </form>
      </div>
    )
  }
}

LoginPage.contextTypes = {
  router: React.PropTypes.object
};

export default LoginPage;

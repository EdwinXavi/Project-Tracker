import React, { Component } from 'react';

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    console.log('---------------------', this.props);
  }
  handleUsernameChange(e) {
    this.setState({username: e.target.value});
  }
  handlePasswordChange(e) {
    this.setState({password: e.target.value});
  }
  handleLogin(e) {
    e.preventDefault();
  }
  render()  {
    return (
      <div className='wrapper'>
        <form ref='forms' className='form-signin' action='' onSubmit={this.handleLogin}>
          <h2 className='form-signin-heading'>Please Login</h2>
          <input type='text' className='form-control' name='username' placeholder='username/email' onChange={this.handleUsernameChange} required='' autoFocus='' />
          <input type='password' className='form-control' name='password' placeholder='password' onChange={this.handlePasswordChange} required=''/>
          <label className='checkbox'>
            <input type='checkbox' value='remember-me' id='rememberMe' name='rememberMe'/>Remember me
          </label>
          <button className='btn btn-lg btn-primary btn-block' type='submit'>Login</button>
        </form>
      </div>
    )
  }
}

export default LoginPage;

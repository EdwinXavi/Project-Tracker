import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import axios from 'axios';
const revertedPassword = require('../../node_modules/password-hash/lib/password-hash');

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      LoginUser: ''
    }
    this.handleLogin = this.handleLogin.bind(this);
    this.validateUser = this.validateUser.bind(this);
  }
  // handleUsernameChange(e) {
  //   this.setState({username: e.target.value});
  // }
  // handlePasswordChange(e) {
  //   this.setState({password: e.target.value});
  // }

  validateUser(username, password) {
    const _this = this;
    const dataUser = axios.get('http://localhost:3000/api/users')
      .then(function(response) {
        const UserList = response.data.Users;
        UserList.map(user => {
          if(user.username == username && revertedPassword.verify(password, user.password)) {
            _this.setState({LoginUser: username});
          }
        });
      })
  }

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
      this.validateUser(username, password);
      this.props.signin(username,password);
    }
    if(!this.state.LoginUser == '') {
      this.context.router.push('/home');
      this.refs.loginForm.reset();
    }
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

import axios from 'axios';

export function signin(username, password) {
  const request = axios({
    method: 'post',
    url: 'http://localhost:3000/api/users/login',
    data:{
      username: username,
      password: password
    }
  });

  return {
    type: 'SIGN_IN',
    payload: request
  };
}

export function signinSuccess(user) {
  if(user.data.user) {
    return {
      type: 'SIGN_IN_SUCESS',
      payload: user
    };
  }
}

export function signinFailure(error) {
  return {
    type: 'SIGN_IN_FAILURE',
    payload: error
  };
}

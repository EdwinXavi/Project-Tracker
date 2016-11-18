import axios from 'axios';
import querystring from 'querystring';

export function signin(username, password) {
  const request = axios.post('http://localhost:3000/api/users/login', {username, password});

  return {
    type: 'SIGN_IN',
    payload: request
  };
}

export function signinSuccess(token) {
  return {
    type: 'SIGN_IN_SUCESS',
    payload: token
  };
}

export function signinFailure(error) {
  return {
    type: 'SIGN_IN_FAILURE',
    payload: error
  };
}

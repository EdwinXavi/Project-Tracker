import axios from 'axios';

export function signin(username, password) {
  //const request = axios.post('http://localhost:3000/api/users/login', {username: username, password: password});
  //from where is this function called?
  console.log('---username---', username);
  console.log('---password---', password);
  const request = axios({
    method: 'post',
    url: 'http://localhost:3000/api/users/login',
    data:{
      username: username,
      password: password
    }
  });
  console.log('-----request----', request);

  return {
    type: 'SIGN_IN',
    payload: request
  };
}

export function signinSuccess(user) {
  console.log('----user---', typeof user.data.user[0].username);
  if(typeof user.data.user[0].username === "string") {
    return {
      type: 'SIGN_IN_SUCESS',
      payload: user
    };
  }
  else {
    console.log('Invalid credentials');
    alert('Invalid credentials');
  }
}

export function signinFailure(error) {
  return {
    type: 'SIGN_IN_FAILURE',
    payload: error
  };
}

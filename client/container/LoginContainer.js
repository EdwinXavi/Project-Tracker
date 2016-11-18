import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signin, signinSuccess, signinFailure } from '../actions/UserActions';

import LoginPage from '../component/LoginPage';

//Client-Side validation
// function validate(username, password) {
//
// }

function mapDispatchToProps(dispatch) {
  return {
    signin: (username, password) => {
      dispatch(signin(username, password)).then(response => {
        !response.error ? dispatch(signinSuccess(response.payload)) : dispatch(signinFailure(response.payload));
      });
    }
  }
}

const LoginContainer = connect(null, mapDispatchToProps)(LoginPage);

export default LoginContainer;

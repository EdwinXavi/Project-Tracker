import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { signin, signinSuccess, signinFailure } from '../actions/UserActions';

import LoginPage from '../component/LoginPage';

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    signin: (username, password) => {
      dispatch(signin(username, password)).then(response => {
        !response.error ? dispatch(signinSuccess(response.payload)) : dispatch(signinFailure(response.payload));
      });
    }
  }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginPage);

export default LoginContainer;

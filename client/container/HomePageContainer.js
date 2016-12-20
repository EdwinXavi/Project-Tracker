import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchTypes, fetchTypesSuccess, fetchTypesFailure } from '../actions/HomePageActions';
import * as actions from '../actions/HomePageActions';

import HomePage from '../component/HomePage';

function mapStateToProps(state) {
  return {
    types: state.homePage
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTypes: () => {
      dispatch(fetchTypes()).then(response => {
        !response.error ? dispatch(fetchTypesSuccess(response.payload)) : dispatch(fetchTypesFailure(response.payload));
      });
    }
  }
}

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;

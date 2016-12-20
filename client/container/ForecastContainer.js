import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjects, fetchProjectSuccess, fetchProjectFailure } from '../actions/ForecastActions';

import ForecastPage from '../component/ForecastPage';

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProjects: () => {
      dispatch(fetchProjects()).then(response => {
        !response.error ? dispatch(fetchProjectSuccess(response.payload)) : dispatch(fetchProjectFailure(response.payload));
      });
    }
  }
}

const ForecastContainer = connect(mapStateToProps, mapDispatchToProps)(ForecastPage);

export default ForecastContainer;

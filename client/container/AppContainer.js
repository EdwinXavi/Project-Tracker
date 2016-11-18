import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchProjects, fetchProjectsSuccess, fetchProjectsFailure } from '../actions/actions';

import Project from '../component/Project';

function mapStateToProps(state) {
  return {
    projects: state.projects
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchProjects: () => {
      dispatch(fetchProjects()).then(response => {
        !response.error ? dispatch(fetchProjectsSuccess(response.payload)) : dispatch(fetchProjectsFailure(response.payload));
      });
    }
  }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(Project);

export default AppContainer;

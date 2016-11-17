import axios from 'axios';

export function fetchProjects() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:3000/api/projectDetails'
  });

  return {
    type: 'FETCH_PROJECTS',
    payload: request
  };
}

export function fetchProjectsSuccess(projects) {
  return {
    type: 'FETCH_PROJECTS_SUCCESS',
    payload: projects
  }
}

export function fetchProjectsFailure(error) {
  return {
    type: 'FETCH_PROJECTS_FAILURE',
    payload: error
  }
}

import axios from 'axios';

export function fetchProjects() {
  const request = axios({
    'method': 'get',
    'url': 'http://localhost:3000/api/projects'
  });

  return {
    type: 'FETCH_PROJECTS',
    payload: request
  }
}

export function fetchProjectSuccess(projects) {
  return {
    type: 'FETCH_PROJECT_SUCCESS',
    payload: projects
  }
}

export function fetchProjectFailure(error) {
  return {
    type: 'FETCH_PROJECT_FAILURE',
    payload: error
  }
}

import axios from 'axios';

export function fetchTypes() {
  const request = axios({
    method: 'get',
    url: 'http://localhost:3000/api/typeOfProjects'
  });

  return {
    type: 'FETCH_TYPES',
    payload: request
  };
}

export function fetchTypesSuccess(types) {
  return {
    type: 'FETCH_TYPES_SUCCESS',
    payload: types
  }
}

export function fetchTypesFailure(error) {
  return {
    type: 'FETCH_TYPES_FAILURE',
    payload: error
  }
}

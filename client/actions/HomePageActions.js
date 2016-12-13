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

export function addType(name) {
  const request = axios({
    method: 'post',
    url: 'http://localhost:3000/api/typeOfProjects?name=',
    data: {
      name: name
    }
  });
  return {
    type: "ADD_TYPE",
    payload: request
  };
}

export function addTypeSuccess(type) {
  return {
    type: 'ADD_TYPE_SUCCESS',
    payload: type
  }
}

export function addTypeFailure(error) {
  return {
    type: 'ADD_TYPE_FAILURE',
    payload: error
  }
}

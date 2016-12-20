function projects(state = [], action) {
  if(action.type === "FETCH_PROJECTS") {
    return {
      ...state, projects
    };
  }
  else if (action.type === "FETCH_PROJECT_SUCCESS") {
    return [
      ...state, {projects: action.payload.data.projects}
    ]
  }
  else if (action.type === "FETCH_PROJECT_FAILURE") {
    error = action.payload.data || {message: action.payload.message};
    return { ...state, types: {types: [], error: error}};
  }
  return state;
}

export default projects;

function projects(state = [], action) {
  if(action.type === "FETCH_PROJECTS") {
    console.log('in FETCH_PROJECTS data reducer');
    return {
      ...state, projects
    };
  }
  else if(action.type === "FETCH_PROJECTS_SUCCESS") {
    console.log('in FETCH_PROJECTS_SUCCESS data reducer');
    return [
      ...state, {projects:action.payload.data}
    ]
  }
  else if(action.type === "FETCH_PROJECTS_FAILURE") {
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, projects: {projects: [], error: error}};
  }
  return state;
}

export default projects;

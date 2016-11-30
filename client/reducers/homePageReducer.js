function types(state = [], action) {
  if(action.type === "FETCH_TYPES") {
    console.log('in FETCH_TYPES data reducer');
    return {
      ...state, types
    };
  }
  else if(action.type === "FETCH_TYPES_SUCCESS") {
    console.log('in FETCH_TYPES_SUCCESS data reducer');
    return [
      ...state, {types:action.payload.data.types}
    ]
  }
  else if(action.type === "FETCH_PROJECTS_FAILURE") {
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, types: {types: [], error: error}};
  }
  return state;
}

export default types;

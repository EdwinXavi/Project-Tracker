function types(state = [], action) {
  if(action.type === "FETCH_TYPES") {
    return {
      ...state, types
    };
  }
  else if(action.type === "FETCH_TYPES_SUCCESS") {
    return [
      ...state, {types:action.payload.data.types}
    ]
  }
  else if(action.type === "FETCH_TYPES_FAILURE") {
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, types: {types: [], error: error}};
  }
  else if(action.type === "ADD_TYPE") {
    console.log('in add type reducer');
    return {
      ...state, type
    };
  }
  else if(action.type === "ADD_TYPE_SUCCESS") {
    console.log('-------------payload for add type success------', action.payload);
    return [
      ...state, {types:action.payload}
    ]
  }
  else if(action.type === "ADD_TYPE_FAILURE") {
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, types: {types: [], error: error}};
  }
  return state;
}

export default types;

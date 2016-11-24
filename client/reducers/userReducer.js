function user(state = [], action) {
  if(action.type === "SIGN_IN") {
    console.log('in SIGN_IN reducer');
    return {
      ...state, user
    };
  }
  else if(action.type === "SIGN_IN_SUCESS") {
    console.log('in SIGN_IN_SUCESS reducer');
    return [
      ...state, {user:action.payload.data}
    ]
  }
  else if(action.type === "SIGN_IN_FAILURE") {
    error = action.payload.data || {message: action.payload.message};//2nd one is network or server down errors
    return { ...state, user: {user: [], error: error}};
  }
  return state;
}

export default user;

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projectsReducer';
import users from './userReducer';

const rootReducer = combineReducers({ users, projects, routing: routerReducer });

export default rootReducer;

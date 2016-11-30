import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projectsReducer';
import users from './userReducer';
import homePage from './homePageReducer';

const rootReducer = combineReducers({ users, projects, homePage, routing: routerReducer });

export default rootReducer;

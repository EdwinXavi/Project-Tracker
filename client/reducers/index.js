import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './userReducer';
import homePage from './homePageReducer';
import projects from './forecastReducer';

const rootReducer = combineReducers({ users, homePage, projects, routing: routerReducer });

export default rootReducer;

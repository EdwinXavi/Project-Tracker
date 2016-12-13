import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import users from './userReducer';
import homePage from './homePageReducer';

const rootReducer = combineReducers({ users, homePage, routing: routerReducer });

export default rootReducer;

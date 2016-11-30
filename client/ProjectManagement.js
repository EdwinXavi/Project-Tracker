import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory} from 'react-router';
import { Provider } from 'react-redux';
import css from './styles/custom.styl';
import configureStore, { history } from './store';

import LoginContainer from './container/LoginContainer';
import LoginPage from './component/LoginPage';
import HomePageContainer from './container/HomePageContainer';
import HomePage from './component/HomePage';

const store = configureStore();

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={LoginContainer}>
        <IndexRoute component={LoginPage}></IndexRoute>
      </Route>
      <Route path='/home' component={HomePageContainer}>
        <IndexRoute component={HomePage} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
